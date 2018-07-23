
export default function(state={}, action){
    switch(action.type){
        case "EQUIPMENTS_LIST_FETCH": {
            state={ ...state,equipments: action.payload}
            break;
        }
        case "EQUIPMENTS_LIST_ADD":{
            state={ ...state,equipments: [...state.equipments, action.payload]}
            break;
        }
        case "EQUIPMENTS_LIST_DELETE":{
            var equipmentsList=state.equipments;
            console.log(equipmentsList);
            var newEquipmentList=[];
            var selectedEquipmentId= action.payload.id;
            for (var i=0; i<equipmentsList.length;i++){
                console.log(equipmentsList[i]);
                if(equipmentsList[i].id===selectedEquipmentId)
                    continue;
                newEquipmentList.push(equipmentsList[i]);
            }
            console.log('updated equipment list',newEquipmentList);
            state={ ...state,equipments: newEquipmentList}
            break;
        }
    }
    console.log("equipments reducer",state,action);

    return state;
}
