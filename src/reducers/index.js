import { combineReducers } from 'redux'

import userReducer from './userReducer'
import { firebaseStateReducer } from 'react-redux-firebase'


export default combineReducers({
	userReducer,
	firebaseStateReducer,

})