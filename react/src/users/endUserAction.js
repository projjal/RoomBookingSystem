import axios from 'axios';

export function selectRoom(room){
    dispatch({type:"ROOM_SELECTED", payload:room})
}

export function selectLayout(layout){
    dispatch({type:"LAYOUT_SELECTED", payload:layout})
}

export function selectEquipments(equipments){
    dispatch({type:"EQUIPMENTS_SELECTED", payload:equipments})
}
export function selectFoods(foods){
    dispatch({type:"FOODS_SELECTED", payload:food})
}
export function addUserDetails(userDetails){
    dispatch({type:"USER_DETAILS_ADDED", payload:userDetails})
}
export function postBookingDetails(booking){
    return(dispatch)=>{
        axios.post('/api/bookings',booking,{"Content-Type":"application/json"})
        .then(response=>{
            console.log(response);
            if(response.status===200){
                dispatch({type:"BOOKING_DETAILS_POSTED", payload:booking})
            }
        })
        .catch(error=>{
            throw error;
        })
    }
}