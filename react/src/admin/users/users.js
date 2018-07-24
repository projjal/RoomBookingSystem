import React, {Component} from 'react';
import axios from 'axios';
import UserList from './userList.js';
import {UserPanel} from './UserPanel';
export default class AdminUsers extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
               <UserPanel/>
               <UserList/>
            </div>
        );
    }

}
