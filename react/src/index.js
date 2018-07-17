import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AdminNavigationTab from './Components/navigationTab';
import AdminMainTab from './Components/mainTab';

class App extends Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className="col-md-12 panel-bar" ><h4>Admin Panel</h4></div>
                <AdminNavigationTab/>
                <AdminMainTab/>
            </div>
        );
    }
}


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.querySelector('.app-container'));