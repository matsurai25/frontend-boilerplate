import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Application from './components/Application'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './modules/reducer'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const container = document.body.appendChild(
  document.createElement('div')
)

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  container
)
