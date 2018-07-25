import React from 'react';
import axios from 'axios';
import {Component} from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     this.props.redirectToReferrer === true
//       ? <Component {...props} />
//       : <Redirect to={{
//           pathname: '/login',
//         //   state: { from: props.location }
//         }} />
//   )} />
// )

class PrivateRoute extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let { component: Component, ...rest } = this.props;
    return (<Route {...rest} render={(props2) => (
      this.props.redirectToReferrer === true
        ? <Component {...props2} />
        : <Redirect to={{
            pathname: '/login',
          //   state: { from: props.location }
          }} />
    )} />
  );
  }

}

// export const Authenticated =  {
//   isAuthenticated : false,
//   authenticate(){
//     this.isAuthenticated = true
//   },
//   signout(){
//     this.isAuthenticated = false
//   }
// }

const mapStateToProps = (state) => {
  return {
    redirectToReferrer : state.login.redirectToReferrer
  };
}

export default connect(mapStateToProps)(PrivateRoute);