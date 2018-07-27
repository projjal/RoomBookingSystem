
    export default function(state={bookings:[]}, action){
        switch(action.type){
            case "BOOKINGS_LIST_FETCH": {
                state={ ...state, bookings: action.payload}
                break;
            }
            case "BOOKINGS_LIST_ADD":{
                state={ ...state, bookings: [...state.bookings, action.payload]}
                break;
            }
            case "BOOKINGS_LIST_DELETE":{
                var bookingsList=state.bookings;
                console.log(bookingsList);
                var newBookingsList=[];
                var selectedBookingsId= action.payload;
                for (var i=0; i<bookingsList.length;i++){
                    console.log(bookingsList[i]);
                    if(bookingsList[i].id===selectedBookingsId)
                        continue;
                    newBookingsList.push(bookingsList[i]);
                }
                console.log('updated bookings list',newBookingsList);
                state={ ...state,bookings: newBookingsList}
                break;
            }
        }
        console.log("bookings reducer",state,action);

        return state;
    }
