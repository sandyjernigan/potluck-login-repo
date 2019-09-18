import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { dataReducer } from './dataReducer';

export default combineReducers({
  loginReducer, 
  registerReducer, 
  dataReducer
});
