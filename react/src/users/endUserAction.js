import axios from 'axios';

export function selectRoom(room){
   return {type:"ROOM_SELECTED", payload:room};
}

export function selectLayout(layout){
    return {type:"LAYOUT_SELECTED", payload:layout};
}

export function selectEquipments(equipments){
    return {type:"EQUIPMENTS_SELECTED", payload:equipments};
}
export function selectFoods(foods){
    return {type:"FOODS_SELECTED", payload:foods};
}
export function addUserDetails(userDetails){
    return {type:"USER_DETAILS_ADDED", payload:userDetails};
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