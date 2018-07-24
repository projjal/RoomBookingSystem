
export default function(state={}, action){
    switch(action.type){
        case "USERS_LIST_FETCH": {
            state={ ...state,users: action.payload}
            break;
        }
        case "USERS_LIST_ADD":{
            state={ ...state,users: [...state.users, action.payload]}
            break;
        }
        case "USERS_LIST_DELETE":{
            var usersList=state.users;
            console.log(usersList);
            var newUserList=[];
            var selectedUserId= action.payload.id;
            for (var i=0; i<usersList.length;i++){
                console.log(usersList[i]);
                if(usersList[i].id===selectedUserId)
                    continue;
                newUserList.push(usersList[i]);
            }
            console.log('updated user list',newUserList);
            state={ ...state,users: newUserList}
            break;
        }
    }
    console.log("users reducer",state,action);

    return state;
}
