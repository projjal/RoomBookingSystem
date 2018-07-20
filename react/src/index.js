import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
// import AdminNavigationTab from './admin/navigationTab';
// import AdminMainTab from './admin/mainTab';
// import {createStore,applyMiddleware} from 'redux';
// import reducers from './Reducers/';
// import {Provider} from 'react-redux'; // stitch react and redux
// const creatStoreWithMiddleware=applyMiddleware(thunk)(createStore);
// import thunk from 'redux-thunk';

import TableView from './admin/util/tableView.js';
/* ReactDOM.render(
<Provider store={creatStoreWithMiddleware(reducers)}>
<App/>
</Provider>,

document.querySelector('.container')); */
// class App extends Component{
//     render(){
//         return(
//             <BrowserRouter>
//             <div className='container-fluid'>
//                 <div className="col-md-12 panel-bar" ><h4>Admin Panel</h4></div>
//                 <AdminNavigationTab/>
//                 <AdminMainTab/>
//             </div>
//             </BrowserRouter>
//         );
//     }
// }

class App extends Component{
  constructor(props){
  super(props);
  this.state={
    headings:["ID", "NAME", "SALARY"],
    players:[
    {id:101, "name":'sachin', 'salary':1000},
    {id:102, "name":'saurav', 'salary':2000},
    {id:103, "name":'rahul', 'salary':1500},
    {id:104, "name":'sehwag', 'salary':3000},
    {id:105, "name":'virat', 'salary':8000}
  ]
  }
}
  render(){
    <div>
    <TableView heading={this.state.headings} data={this.state.players}/>
    </div>
  }
}

ReactDOM.render(<App/>, document.querySelector(".container"));

// ReactDOM.render(<Provider store={creatStoreWithMiddleware(reducers)}><App/></Provider>,document.querySelector('.app-container'));
