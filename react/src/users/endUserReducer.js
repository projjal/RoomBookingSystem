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
        case "ROOM_BOOKING_DETAILS_ADDED":{
            state={ ...state,roomBookingDetails: action.payload}
            break;
        }
        case "ROOM_FETCH":{
            state={ ...state,fetchRoom: action.payload}
            break;
        }
        case "ROOM_FAILED":{
            break;
        }
        case "LAYOUT_FETCH":{
            state={ ...state,fetchLayout: action.payload}
            break;
        }
        case "LAYOUT_FAILED":{
            break;
        }
        case "BOOKING_DETAILS_POSTED":{
            state={ ...state,finalBooking: action.payload, isBookingConfirmed : true}
            break;
        }
    
}

    return state;
}
