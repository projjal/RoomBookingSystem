import axios from 'axios';
export function fetchRooms(){

    return (dispatch, getState) => {
        axios.get("/api/rooms") 
        .then((response)=>{
            console.log(response.data);
            dispatch({type:"ROOMS_LIST_FETCH", payload:response.data});
        }).catch((error)=>{
            dispatch({type : "ROOMS_LIST_FAILED", error : error});
        });   
    };
    
}
export function addRoom(data){

    return (dispatch, getState) => {
        axios.post("/upload/img",{"img":data.image,"type":"rooms"},{"Content-Type":"text/plain"}).then((response)=>{
            console.log(response);
            data.image=response.data.imgUrl;
            console.log('form data to be sent to the server ',data);
            /* axios.post("/api/rooms",data.formData,{"Content-Type":"application/json"})
            .then((response)=>{
                console.log(response);
                if(response.status===200){
                    var roomID= response.data;
                    data.formData.id=roomID;
                    dispatch({type:"ROOMS_LIST_ADD", payload:data.formData});
                }
            }).catch((error)=>{
                throw error;
                //dispatch({type : "ROOMS_LIST_FAILED", error : error});
            }); */
        })
        .catch((err)=>console.log(err)); 
    };
    
}

export function deleteRoom(selectedRoom){

    return (dispatch, getState) => {
        axios.delete("/api/rooms/"+selectedRoom.id)
        .then((response)=>{
            console.log(response);
            if(response.status===200)
                dispatch({type:"ROOMS_LIST_DELETE", payload:selectedRoom});
        }).catch((error)=>{
            throw error;
        });   
    };
    
}