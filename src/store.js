import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import session from 'controllers/Session/reducers.js';


const appReducer = combineReducers({
	session
});

const rootReducer = (state, action) => {
	if (action.type === 'SESSION_LOGOUT') {
		state = undefined;
	};
	return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));


export default store;