import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import store from './store'
import '../public/css/app.css'

// import { fetchFormularyDrug } from './reducers/formulary/actions';

syncHistoryWithStore(createBrowserHistory(), store)

const root = document.getElementById('app-container')

// store.dispatch(fetchFormularyDrug('crestor'));

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    root
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
