import { combineReducers } from 'redux';
import authReducer from './authReducer';
import videoReducer from './videoReducer';


// need to be reviewed
export default combineReducers({
    auth: authReducer,
    video: videoReducer
});
