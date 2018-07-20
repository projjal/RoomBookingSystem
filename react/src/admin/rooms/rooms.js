import React, {Component} from 'react';
import RoomList  from './RoomList';
import {RoomPanel} from './RoomPanel';
import { Switch, Route } from 'react-router-dom'
import AddRoom from './AddRoom';
export default class AdminRooms extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <RoomPanel/>
                    <Switch>
                        <Route exact path='/rooms/' component={RoomList}/>
                        <Route path='/rooms/addRoom' component={AddRoom}/>
                    </Switch>
            </div>
        );
    }
    
}