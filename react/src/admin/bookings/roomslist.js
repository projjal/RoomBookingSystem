    export default function RoomList(){
        return[
            {
                "id": 1,
                "type": "some type",
                "capacity": 20,
                "description": "some room",
                "image": "someimg",
                "pricePerDay": 10,
                "pricePerHour": 1,
                "ststus": 0,
                "layouts" : ["layout1", "layout2", "layout3"]
            },
            {
                "id": 2,
                "type": "shfakfhak type",
                "capacity": 20,
                "description": "some room",
                "image": "someimg",
                "pricePerDay": 10,
                "pricePerHour": 1,
                "ststus": 1,
                "layouts" : ["layout4", "layout5", "layout6"]
            },
            {
                "id": 3,
                "type": "Conference Room",
                "capacity": 15,
                "description": "Room to hold meetings",
                "image": "/path/to/img",
                "pricePerDay": 100,
                "pricePerHour": 10,
                "ststus": 1,
                "layouts" : ["layout1", "layout3", "layout5"]
            },
            {
                "id": 4,
                "type": "Meeting Room",
                "capacity": 18,
                "description": "Meeting room",
                "image": "/path/to/img2",
                "pricePerDay": 80,
                "pricePerHour": 10,
                "ststus": 0,
                "layouts" : ["layout2", "layout4", "layout6"]
            }
        ];
    }