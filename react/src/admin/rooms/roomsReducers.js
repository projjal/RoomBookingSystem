export default function(state={}, action){
    switch(action.type){
        case "ROOMS_LIST_FETCH": {
            state={ ...state,rooms: action.payload}
            break;
        }
        case "ROOMS_LIST_ADD":{
            state={ ...state,rooms: [...state.rooms, action.payload]}
            break;
        }
    }
    console.log("rooms reducer",state,action);

    return state;
}








/* export default function(){
    return[
        {
            "id": 1,
            "type": "some type",
            "capacity": 20,
            "description": "some room",
            "image": "someimg",
            "pricePerDay": 10,
            "pricePerHour": 1,
            "ststus": 0
        },
        {
            "id": 2,
            "type": "shfakfhak type",
            "capacity": 20,
            "description": "some room",
            "image": "someimg",
            "pricePerDay": 10,
            "pricePerHour": 1,
            "ststus": 1
        },
        {
            "id": 3,
            "type": "Conference Room",
            "capacity": 15,
            "description": "Room to hold meetings",
            "image": "/path/to/img",
            "pricePerDay": 100,
            "pricePerHour": 10,
            "ststus": 1
        },
        {
            "id": 4,
            "type": "Meeting Room",
            "capacity": 18,
            "description": "Meeting room",
            "image": "/path/to/img2",
            "pricePerDay": 80,
            "pricePerHour": 10,
            "ststus": 0
        }
    ];
} */