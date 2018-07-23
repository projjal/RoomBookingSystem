
export default function(state={}, action){
    switch(action.type){
        case "FOODS_LIST_FETCH": {
            state={ ...state,foods: action.payload}
            break;
        }
        case "FOODS_LIST_ADD":{
            state={ ...state,foods: [...state.foods, action.payload]}
            break;
        }
        case "FOODS_LIST_DELETE":{
            var foodsList=state.foods;
            console.log(foodsList);
            var newFoodList=[];
            var selectedFoodId= action.payload.id;
            for (var i=0; i<foodsList.length;i++){
                console.log(foodsList[i]);
                if(foodsList[i].id===selectedFoodId)
                    continue;
                newFoodList.push(foodsList[i]);
            }
            console.log('updated food list',newFoodList);
            state={ ...state,foods: newFoodList}
            break;
        }
    }
    console.log("foods reducer",state,action);

    return state;
}
