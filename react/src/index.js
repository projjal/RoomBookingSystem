import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AdminNavigationTab from './admin/navigationTab';
import AdminMainTab from './admin/mainTab';
import {createStore,applyMiddleware} from 'redux';
import reducers from './Reducers/'; 
import {Provider} from 'react-redux'; // stitch react and redux
const creatStoreWithMiddleware=applyMiddleware(thunk)(createStore);
import thunk from 'redux-thunk';
/* ReactDOM.render(
<Provider store={creatStoreWithMiddleware(reducers)}>
<App/>
</Provider>,

document.querySelector('.container')); */
class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className='container-fluid'>
                <div className="col-md-12 panel-bar" ><h4>Admin Panel</h4></div>
                <AdminNavigationTab/>
                <AdminMainTab/>
            </div>
            </BrowserRouter>
        );
    }
}


ReactDOM.render(<Provider store={creatStoreWithMiddleware(reducers)}><App/></Provider>,document.querySelector('.app-container'));