// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'

import { createHashHistory } from 'history'
import Routes from './routes'

import { Provider } from 'react-redux'
import store from './store'


let history = createHashHistory();
const app = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
  		<Routes history={history} />
  	</Provider>, app);