import { combineReducers } from 'redux';
import dashboard from './modules/dashboard/reducer';
import login from './modules/login/reducer';

const rootReducer = combineReducers({
  dashboard,
  login
});

export default rootReducer;
