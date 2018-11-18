import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import what from './what';
import where from './where';
import users from './users';

const reducer = combineReducers({
  what,
  where,
  users,
});

export default createStore(reducer, applyMiddleware(logger, thunk));
