    import axios from 'axios';
    export function fetchUsers(){

        return (dispatch, getState) => {
            axios.get("/api/admins")
            .then((response)=>{
                console.log(response.data);
                dispatch({type:"USERS_LIST_FETCH", payload:response.data});
            }).catch((error)=>{
                dispatch({type : "USERS_LIST_FAILED", error : error});
            });
        };

    }
    export function addUser(data){

        return (dispatch, getState) => {
            axios.post("/api/admins",data,{"Content-Type":"application/json"})
                .then((response)=>{
                    console.log(response);
                    if(response.status===200){
                        var adminID= response.data;
                        data.id=adminID;
                        dispatch({type:"USERS_LIST_ADD", payload:data});
                    }
                }).catch((error)=>{
                    throw error;
                });
            }

    }

    export function deleteUser(selectedUser){

        return (dispatch, getState) => {
            axios.delete("/api/admins/"+selectedUser.id)
            .then((response)=>{
                console.log(response);
                if(response.status===200)
                    dispatch({type:"USERS_LIST_DELETE", payload:selectedUser});
            }).catch((error)=>{
                throw error;
            });
        };

    }
