  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import {createStore,applyMiddleware} from 'redux';
  import reducers from './Reducers/';
  import {Provider} from 'react-redux'; // stitch react and redux
  import { Switch, Route, Redirect } from 'react-router-dom';
  import {Router} from 'react-router-dom';
  import LoginForm from './admin/login/login.js';
  import history from './history.js';
  import UserApp from './users/index.js';
  import AdminApp from './admin/index.js';


  const creatStoreWithMiddleware=applyMiddleware(thunk)(createStore);
  import thunk from 'redux-thunk';

class App extends Component{
  render(){
    return (
        <Router history={history}>
          <div className='container-fluid'>
            <Switch>
              <Route path='/login' component={LoginForm}/>
              <Route exact path='/' component={UserApp}/>
              <Route path='/admin' component={AdminApp} />
            </Switch>
          </div>
        </Router>
    )
  }
}

  ReactDOM.render(<Provider store={creatStoreWithMiddleware(reducers)}><App/></Provider>,document.querySelector('.app-container'));
