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