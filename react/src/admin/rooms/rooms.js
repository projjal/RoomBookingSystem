import React, {Component} from 'react';
import axios from 'axios';
import RoomList  from './RoomList';
export default class AdminRooms extends Component{
    constructor(props){
        super(props);
       this.fetchRooms();
    }
    fetchRooms(){
        axios.get("/api/rooms") //CORS Issue to see 
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            throw err;
        });
    }
    render(){
        //this.fetchRooms();
        return(
            <div>
               
                <RoomList/>
            </div>
        );
    }
}