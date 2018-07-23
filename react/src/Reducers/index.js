import {combineReducers} from 'redux';
import RoomReducer from '../admin/rooms/roomsReducers';
import loginReducer from '../admin/login/loginReducer';

const rootReducer= combineReducers({
    rooms:RoomReducer,
    layouts:layoutReducer,
    login:loginReducer

});

export default rootReducer;
