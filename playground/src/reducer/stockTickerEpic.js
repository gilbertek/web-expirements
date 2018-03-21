import { Observable } from 'rxjs';

const socket = new WebSocketSubject('ws://stock/endpoint');

export const stockTickerEpic = action$ =>
  action$
    .ofType('GET_TICKER_STREAM')
    .mergeMap(action =>
      socket
        .multiplex(
          () => ({ sub: action.ticker }),
          () => ({ unsub: action.ticker }),
          msg => msg.ticker === action.ticker
        )
        .retryWhen(
          err =>
            window.navigator.onLine
              ? Observable.timer(1000)
              : Observable.fromEvent(window, 'online')
        )
        .takeUntil(
          action$
            .ofType('CLOSE_TICKER_STREAM')
            .filter(closeAction => closeAction.ticker === action.ticker)
        )
        .map(tick => ({ type: 'TICKER_TICK_RESULT', tick }))
    );
