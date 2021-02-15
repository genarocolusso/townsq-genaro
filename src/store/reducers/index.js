import { combineReducers } from 'redux';

import  postReducer from './posts';
import  usersReducer from './users';

export default combineReducers({
  posts: postReducer,
  users: usersReducer
});
