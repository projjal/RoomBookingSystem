    import React, {Component} from 'react';
    import axios from 'axios';
    import history from '../history'

    export default class Logout extends Component{
        constructor(props){
            super(props);
            axios.post('/api/logout',{},{withCredentials : true})
            .then(res=>{
                history.push('/login');
            })
            .catch(err=>{throw err;});
        }
        render(){
            return(
                <div>You are logged out!! </div>
            );
        }
    }