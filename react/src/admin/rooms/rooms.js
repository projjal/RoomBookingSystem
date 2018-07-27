    import React, {Component} from 'react';
    import RoomList  from './RoomList';
    import axios from 'axios';
    import {RoomPanel} from './RoomPanel';
    export default class AdminRooms extends Component{
        constructor(props){
            super(props);
        }
        render(){   
            return(
                <div>
                    <RoomPanel/>
                    <RoomList/>
                </div>
            );
        }
        
    }