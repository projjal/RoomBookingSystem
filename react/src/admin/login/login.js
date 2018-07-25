import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './loginReducer';
import {bindActionCreators} from 'redux';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Redirect} from 'react-router-dom'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password : ""
      // redirectToReferrer : false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    // let {isLoginPending, isLoginSuccess, loginError} = this.props;
    // let{redirectToReferrer} = this.props.

    console.log("redirecttorefererrer : " + this.props.redirectToReferrer);

    if (this.props.redirectToReferrer === true) {
      return <Redirect to="/admin/dashboard" />
    }
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
        {/* <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { loginError && <div>{loginError.message}</div> }
        </div> */}
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
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
      // redirectToReferrer : true
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError,
    redirectToReferrer : state.login.redirectToReferrer
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login:login
},dispatch);
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);