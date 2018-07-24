import axios from 'axios';
function asyncLoop(count,layoutsList,dispatch){
    if(count<layoutsList.length){
        axios.post('/download/img',{"filePath":layoutsList[count].image},{"Content-Type":"application/json"})
                .then((response)=>{
                    console.log(response);

                    if(response.status===200){
                        var imgData=response.data.imgData;
                        layoutsList[count].image=imgData;
                    }
                    else{
                        layoutsList[count].image=null;
                    }
                    count++;
                    asyncLoop(count, layoutsList,dispatch); 
                })
                .catch((err)=>{throw err;});
    }
    if(count===layoutsList.length)
        dispatch({type : "LAYOUTS_LIST_FETCH", payload:layoutsList});

}
export function fetchLayouts(){

    return (dispatch, getState) => {
        axios.get("/api/layouts") 
        .then((response)=>{
            console.log(response.data);
            var layoutsList=response.data;
            asyncLoop(0,layoutsList,dispatch);

        }).catch((error)=>{
            dispatch({type : "LAYOUTS_LIST_FAILED", error : error});
        });   
    };
    
}

export function addLayout(data){

    return (dispatch, getState) => {
        axios.post("/upload/img",{"img":data.image,"type":"layouts"},{"Content-Type":"text/plain"}).then((response)=>{
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