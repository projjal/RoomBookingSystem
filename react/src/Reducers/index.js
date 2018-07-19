import {combineReducers} from 'redux';
import RoomReducer from '../admin/rooms/roomsReducers';
const rootReducer= combineReducers({
    rooms:RoomReducer
});

export default rootReducer;
