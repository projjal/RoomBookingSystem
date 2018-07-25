export default function(state={}, action){
    switch(action.type){
        case "ROOM_SELECTED":{
            state={ ...state,room: action.payload}
            break;
        }
        case "LAYOUT_SELECTED":{
            state={ ...state,layout: action.payload}
            break;
        }
        case "EQUIPMENTS_SELECTED":{
            state={ ...state,equipments: action.payload}
            break;
        }
        case "FOODS_SELECTED":{
            state={ ...state,foods: action.payload}
            break;
        }
        case "USER_DETAILS_ADDED":{
            state={ ...state,userDetails: action.payload}
            break;
        }
        case "BOOKING_DETAILS_POSTED":{
            state={ ...state,finalBooking: action.payload}
            break;
        }
    }

    return state;
}