  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import {bindActionCreators} from 'redux';
  import {Alert, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
  import {Redirect} from 'react-router-dom'
  import axios from 'axios';
  import history from '../../history'



  var querystring = require('querystring');

  class LoginForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        email : "",
        password : "",
        loginFailed : false
      };
      this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
      let {email, password, loginFailed} = this.state;

      return (
        <div>
        <div className="loginbody"></div>
        <div className="logingrad"></div>
        <div className="loginheader">
          <div>Room<span>Booking</span></div>
        </div>
        <div className="login">
        
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              placeholder="email"
              onChange={e => this.setState({email: e.target.value})}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              value={this.state.password}
              placeholder="password"
              onChange={e => this.setState({password: e.target.value})}
              type="password"
            />
          </FormGroup>
          <br/>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <div className="message">
            <br/>
            { loginFailed && <Alert bsStyle="danger"> LOGIN FAILED. Please Try Again</Alert>}
          </div>
        </form>

        </div>
        </div>
      );
    }

    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }

    onSubmit(e) {
      e.preventDefault();
      console.log("submit here")
      let { email, password } = this.state;
      this.login(email, password);
    }

    login(email, password) {
      axios.post("/api/login",querystring.stringify({
        username: email,
        password: password
      }),{
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded"
        },
        withCredentials: true  
      })
          .then((response)=>{
              if(response.status===200){
                history.push('/admin/')
              }
          }).catch((error)=>{
            this.setState({
              email: '',
              password: '',
              loginFailed:true
            });

          }); 
    }
  }
  export default LoginForm;