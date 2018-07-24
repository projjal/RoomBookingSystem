import React, {Component} from 'react';
import axios from 'axios';
export default class Logout extends Component{
    constructor(props){
        super(props);
        axios.post('/api/logout',{})
        .then(res=>{console.log(res)}).catch(err=>{throw err;});
    }
    render(){
        return(
            <div>You are logged out!! </div>
        );
    }
}