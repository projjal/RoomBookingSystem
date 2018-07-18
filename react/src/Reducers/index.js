import {combineReducers} from 'redux';
import RoomReducer from './roomsReducers';
const rootReducer= combineReducers({
    rooms:RoomReducer
});

export default rootReducer;
