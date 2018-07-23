import {combineReducers} from 'redux';
import roomReducer from '../admin/rooms/roomsReducers';
import layoutReducer from '../admin/layouts/layoutReducer';
const rootReducer= combineReducers({
    rooms:roomReducer,
    layouts:layoutReducer
});

export default rootReducer;
