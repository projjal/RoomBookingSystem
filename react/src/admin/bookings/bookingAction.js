    import axios from 'axios';
    export function fetchBookings(){

        return (dispatch, getState) => {
            axios.get("/api/bookings")
            .then((response)=>{
                console.log(response.data);
                dispatch({type:"BOOKINGS_LIST_FETCH", payload:response.data});
            }).catch((error)=>{
                dispatch({type : "BOOKINGS_LIST_FAILED", error : error});
            });
        };

    }

    export function addBookings(data){

        return (dispatch, getState) => {
            axios.post("/api/bookings",data,{"Content-Type":"application/json"})
                .then((response)=>{
                    console.log(response);
                    if(response.status===200){
                        var bookingID= response.data;
                        data.id=bookingID;
                        dispatch({type:"BOOKINGS_LIST_ADD", payload:data});
                    }
                }).catch((error)=>{
                    throw error;
                    //dispatch({type : "ROOMS_LIST_FAILED", error : error});
                });
            }

    }

    export function deleteBookings(id){

        return (dispatch, getState) => {
            axios.delete("/api/bookings/"+id)
            .then((response)=>{
                console.log(response);
                if(response.status===200)
                    dispatch({type:"BOOKINGS_LIST_DELETE", payload:id});
            }).catch((error)=>{
                throw error;
            });
        };

    }
