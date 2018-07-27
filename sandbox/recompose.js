import React from 'react';

const App = props => (
  <div>{props.message}</div>
)

const createTypeWriter = (message, speed) =>
  Observable.zip(
    Observable.from(message),
    Observable.interval(speed),
    letter => letter
  ).scan((acc, curr) => acc + curr)

const StreamingApp = componentFromStream(props$ =>
  props$
    .switchMap(props => createTypeWriter(props.mesage, props.speed))
    .map(message => ({ message }))
    .map(App)
);

render(
  <StreamingApp message='Hello' speed={1000} />,
  document.getElementById('app')
);
