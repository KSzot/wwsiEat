import {combineReducers} from 'redux';
import {userReducer} from './userReducer/userReducer';
const rootReducer = combineReducers({
  User: userReducer,
});

export default rootReducer;
