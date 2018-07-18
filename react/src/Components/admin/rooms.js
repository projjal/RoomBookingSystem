import React, {Component} from 'react';
import axios from 'axios';
import RoomList  from '../../Containers/RoomList';
export default class AdminRooms extends Component{
    constructor(props){
        super(props);
    }
    /* fetchRooms(){
        axios.get("http://localhost:8080/api/rooms")
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            throw err;
        });
    } */
    render(){
        return(
            <div>
                <div>Rooms 11 Div</div>
                <RoomList/>
            </div>
        );
    }
}