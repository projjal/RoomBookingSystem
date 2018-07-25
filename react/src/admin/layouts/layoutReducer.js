export default function(state={}, action){
    switch(action.type){
        case "LAYOUTS_LIST_FETCH": {
            state={ ...state,layouts: action.payload}
            break;
        }
        case "LAYOUTS_LIST_ADD":{
            state={ ...state,layouts: [...state.layouts, action.payload]}
            break;
        }
        case "LAYOUTS_LIST_DELETE":{
            var layoutsList=state.layouts;
            console.log(layoutsList);
            var newLayoutList=[];
            var selectedLayoutId= action.payload.id;
            for (var i=0; i<layoutsList.length;i++){
                console.log(layoutsList[i]);
                if(layoutsList[i].id===selectedLayoutId)
                    continue;
                newLayoutList.push(layoutsList[i]);
            }
            console.log('updated layout list',newLayoutList);
            state={ ...state,layouts: newLayoutList}
            break;
        }
    }
    console.log("layouts reducer",state,action);

    return state;
}
