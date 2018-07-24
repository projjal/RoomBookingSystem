import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './loginReducer';
import {bindActionCreators} from 'redux';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password : ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <div>
      <div className="loginbody"></div>
      <div className="logingrad"></div>
      <div className="loginheader">
        <div>Room<span>Booking</span></div>
      </div>
      {/* <br/> */}
      <div className="login">
      {/* <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
            <br/>
            <input type="password" placeholder="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
            <br/>
            <input type="button" value="Login" />

        <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { loginError && <div>{loginError.message}</div> }
        </div>
      </form> */}
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId="email" bsSize="large">
          {/* <ControlLabel>Email</ControlLabel> */}
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            placeholder="email"
            onChange={e => this.setState({email: e.target.value})}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          {/* <ControlLabel>Password</ControlLabel> */}
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
      </form>

      </div>
      </div>

    //   <div className="Login">
    //   <form onSubmit={this.onSubmit}>
    //     <FormGroup controlId="email" bsSize="large">
    //       <ControlLabel>Email</ControlLabel>
    //       <FormControl
    //         autoFocus
    //         type="email"
    //         value={this.state.email}
    //         onChange={e => this.setState({email: e.target.value})}
    //       />
    //     </FormGroup>
    //     <FormGroup controlId="password" bsSize="large">
    //       <ControlLabel>Password</ControlLabel>
    //       <FormControl
    //         value={this.state.password}
    //         onChange={e => this.setState({password: e.target.value})}
    //         type="password"
    //       />
    //     </FormGroup>
    //     <Button
    //       block
    //       bsSize="large"
    //       disabled={!this.validateForm()}
    //       type="submit"
    //     >
    //       Login
    //     </Button>
    //   </form>
    // </div>
    );
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login:login
},dispatch);
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);