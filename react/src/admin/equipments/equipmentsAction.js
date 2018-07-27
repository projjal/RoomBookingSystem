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
            axios.post("/api/equipments",data,{"Content-Type":"application/json"})
                .then((response)=>{
                    console.log(response);
                    if(response.status===200){
                        var equipmentID= response.data;
                        data.id=equipmentID;
                        dispatch({type:"EQUIPMENTS_LIST_ADD", payload:data});
                    }
                }).catch((error)=>{
                    throw error;
                });
            }

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
