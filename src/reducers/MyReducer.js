import ProjectsReducer from './Projects';
import UsersReducer from './Users';
import { combineReducers } from 'redux';

const MyReducer =  combineReducers({
  projects: ProjectsReducer,
  users: UsersReducer
});

export default MyReducer;
