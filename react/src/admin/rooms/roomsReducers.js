    export default function(state={}, action){
        switch(action.type){
            case "ROOMS_LIST_FETCH": {
                state={ ...state,rooms: action.payload}
                state={...state,error:false}
                break;
            }
            case "ROOMS_LIST_ADD":{
                state={ ...state,rooms: [...state.rooms, action.payload]}
                state={...state,error:false}
                break;
            }
            case "ROOMS_LIST_DELETE":{
                var roomsList=state.rooms;
                console.log(roomsList);
                var newRoomList=[];
                var selectedRoomId= action.payload.id;
                for (var i=0; i<roomsList.length;i++){
                    console.log(roomsList[i]);
                    if(roomsList[i].id===selectedRoomId)
                        continue;
                    newRoomList.push(roomsList[i]);
                }
                console.log('updated room list',newRoomList);
                state={ ...state,rooms: newRoomList}
                state={...state,error:false}
                break;
            }
            case "ROOMS_LIST_ADD_FAILED":{
                state={...state,error:true}
                break;
            }
            case "ROOMS_LIST_FAILED":{
                break;
            }
        }
        console.log("rooms reducer",state,action);

        return state;
    }
