import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import 'normalize.css'
import './styles/index.styl'

ReactDOM.hydrate(<App />, document.querySelector('#root'))
