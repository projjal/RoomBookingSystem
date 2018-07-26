import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UserMainTab from './mainTab.js';
import UserStatus from './status.js';
import {createStore,applyMiddleware} from 'redux';
import reducers from '../Reducers/';
import {Provider} from 'react-redux'; // stitch react and redux
import { Switch, Route } from 'react-router-dom';
import {Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
import LoginForm from '../admin/login/login.js';
import history from '../history.js';

class UserApp extends Component{
  render(){
    return(
      <Router history={history}>
        <div className='container-fluid'>
        <div className="col-md-12 panel-bar" ><Link to='/login'><button className="btn btn-primary" style={{"float":"right","display":"inline"}}>Login as Admin</button></Link><h3>Room Booking System</h3></div>
        <UserStatus />
        <UserMainTab />
        </div>
      </Router>
    )
  }
}

export default UserApp;
