import axios from 'axios';
export function fetchRooms(){

    return (dispatch, getState) => {
        axios.get("/api/rooms") //CORS Issue to see 
        .then((response)=>{
            console.log(response.data);
            dispatch({type:"ROOMS_LIST_FETCH", payload:response.data});
        }).catch((error)=>{
            dispatch({type : "ROOMS_LIST_FAILED", error : error});
        });   
    };
    
}