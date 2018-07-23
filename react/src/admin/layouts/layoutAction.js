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
        dispatch({type : "LAYOUTS_LIST_FETCH", payload:roomsList});

}
export function fetchLayouts(){

    return (dispatch, getState) => {
        axios.get("/api/layouts") 
        .then((response)=>{
            console.log(response.data);
            var layoutsList=response.data;
           // asyncLoop(0,roomsList,dispatch);
           dispatch({type : "LAYOUTS_LIST_FETCH", payload:layoutsList});

        }).catch((error)=>{
            dispatch({type : "LAYOUTS_LIST_FAILED", error : error});
        });   
    };
    
}

export function addRoom(data){

    return (dispatch, getState) => {
        axios.post("/upload/img",{"img":data.image,"type":"rooms"},{"Content-Type":"text/plain"}).then((response)=>{
            console.log(response);
            data.image=response.data.imgUrl;
            console.log('form data to be sent to the server ',data);
            axios.post("/api/layouts",data,{"Content-Type":"application/json"})
            .then((response)=>{
                console.log(response);
                if(response.status===200){
                    var roomID= response.data;
                    data.id=roomID;
                    dispatch({type:"LAYOUTS_LIST_ADD", payload:data});
                }
            }).catch((error)=>{
                throw error;
            });
        })
        .catch((err)=>console.log(err)); 
    };
    
}

export function deleteLayout(selectedLayout){

    return (dispatch, getState) => {
        axios.delete("/api/layouts/"+selectedlayout.id)
        .then((response)=>{
            console.log(response);
            if(response.status===200)
                dispatch({type:"LAYOUTS_LIST_DELETE", payload:selectedLayout});
        }).catch((error)=>{
            throw error;
        });   
    };
    
}