import {combineReducers} from 'redux';
import RoomReducer from '../admin/rooms/roomsReducers';
import loginReducer from '../admin/login/loginReducer';
import EquipmentReducer from '../admin/equipments/equipmentsReducers';
import FoodReducer from '../admin/food/foodsReducers';
import layoutReducer from '../admin/layouts/layoutReducer';
import UserReducer from '../admin/users/usersReducers';
import EndUserReducer from '../users/endUserReducer';
import BookingReducers from '../admin/bookings/bookingReducers';

const rootReducer= combineReducers({
    rooms:RoomReducer,
    layouts:layoutReducer,
    login:loginReducer,
    equipments:EquipmentReducer,
    foods:FoodReducer,
    users:UserReducer,
    endUsers:EndUserReducer,
    bookings:BookingReducers

});

export default rootReducer;
