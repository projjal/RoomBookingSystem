import axios from 'axios';
export function fetchFoods(){

    return (dispatch, getState) => {
        axios.get("/api/foods")
        .then((response)=>{
            console.log(response.data);
            dispatch({type:"FOODS_LIST_FETCH", payload:response.data});
        }).catch((error)=>{
            dispatch({type : "FOODS_LIST_FAILED", error : error});
        });
    };

}
export function addFoods(data){

    return (dispatch, getState) => {
        axios.post("/upload/img",{"img":data.image,"type":"foods"},{"Content-Type":"text/plain"}).then((response)=>{
            console.log(response);
            data.image=response.data.imgUrl;
            console.log('form data to be sent to the server ',data);
        })
        .catch((err)=>console.log(err));
    };

}

export function deleteFood(selectedFood){

    return (dispatch, getState) => {
        axios.delete("/api/foods/"+selectedFood.id)
        .then((response)=>{
            console.log(response);
            if(response.status===200)
                dispatch({type:"FOODS_LIST_DELETE", payload:selectedFood});
        }).catch((error)=>{
            throw error;
        });
    };

}
