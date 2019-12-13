import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Application from './components/Application'

const container = document.body.appendChild(
  document.createElement('div')
)

ReactDOM.render(<Application />, container)
