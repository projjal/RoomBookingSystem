import axios from 'axios';
function asyncLoop(count,roomsList,dispatch){
    if(count<roomsList.length){
        axios.post('/download/img',{"filePath":roomsList[count].image},{"Content-Type":"application/json"})
                .then((response)=>{
                    console.log(response);

                    if(response.status===200){
                        var imgData=response.data.imgData;
                        roomsList[count].image=imgData;
                    }
                    else{
                        roomsList[count].image=null;
                    }
                    count++;
                    asyncLoop(count, roomsList,dispatch); 
                })
                .catch((err)=>{throw err;});
    }
    if(count===roomsList.length)
        dispatch({type : "ROOMS_LIST_FETCH", payload:roomsList});

}
export function fetchRooms(){

    return (dispatch, getState) => {
        axios.get("/api/rooms") 
        .then((response)=>{
            console.log(response.data);
            var roomsList=response.data;
            asyncLoop(0,roomsList,dispatch);
        }).catch((error)=>{
            dispatch({type : "ROOMS_LIST_FAILED", error : error});
        });   
    };
    
}
export function addRoom(data){

    return (dispatch, getState) => {
        axios.post("/upload/img",{"img":data.image,"type":"rooms"},{"Content-Type":"text/plain"}).then((response)=>{
            console.log(response);
            //data.image=response.data.imgUrl;
            console.log('form data to be sent to the server ',data);
            axios.post("/api/rooms",{...data,image:response.data.imgUrl},{"Content-Type":"application/json"})
            .then((response)=>{
                console.log(response);
                if(response.status===200){
                    var roomID= response.data;
                    data.id=roomID;
                    dispatch({type:"ROOMS_LIST_ADD", payload:data});
                }
                else{
                    dispatch({type:"ROOMS_LIST_ADD_FAILED", payload:data});
                }
            }).catch((error)=>{
                //throw error;
                dispatch({type:"ROOMS_LIST_ADD_FAILED", payload:data});
            });
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