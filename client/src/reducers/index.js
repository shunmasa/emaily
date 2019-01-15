import { combineReducers} from 'redux';
import authReducer from './authReducer';


export default combineReducers({
auth: authReducer 


});
//return to header .function mapStateToProps .auth:authreducer 