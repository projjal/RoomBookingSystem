import axios from 'axios';
export function fetchEquipments(){

    return (dispatch, getState) => {
        axios.get("/api/equipments")
        .then((response)=>{
            console.log(response.data);
            dispatch({type:"EQUIPMENTS_LIST_FETCH", payload:response.data});
        }).catch((error)=>{
            dispatch({type : "EQUIPMENTS_LIST_FAILED", error : error});
        });
    };

}
export function addEquipment(data){

    return (dispatch, getState) => {
        axios.post("/upload/img",{"img":data.image,"type":"equipments"},{"Content-Type":"text/plain"}).then((response)=>{
            console.log(response);
            data.image=response.data.imgUrl;
            console.log('form data to be sent to the server ',data);
        })
        .catch((err)=>console.log(err));
    };

}

export function deleteEquipment(selectedEquipment){

    return (dispatch, getState) => {
        axios.delete("/api/equipments/"+selectedEquipment.id)
        .then((response)=>{
            console.log(response);
            if(response.status===200)
                dispatch({type:"EQUIPMENTS_LIST_DELETE", payload:selectedEquipment});
        }).catch((error)=>{
            throw error;
        });
    };

}
