import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AdminNavigationTab from './navigationTab';
import AdminMainTab from './mainTab';
import {createStore,applyMiddleware} from 'redux';
import reducers from '../Reducers/';
import {Provider} from 'react-redux'; // stitch react and redux

const creatStoreWithMiddleware=applyMiddleware(thunk)(createStore);
import thunk from 'redux-thunk';
/* ReactDOM.render(
<Provider store={creatStoreWithMiddleware(reducers)}>
<App/>
</Provider>,
document.querySelector('.container')); */
class AdminApp extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className='container-fluid'>
                <div className="col-md-12 panel-bar" ><h3>Admin Panel</h3></div>
                <hr/>
                <AdminNavigationTab/>
                <AdminMainTab/>
            </div>
            </BrowserRouter>
        );
    }
}

export default AdminApp;
