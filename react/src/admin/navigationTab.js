import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
class TabOptions extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Link to={'/admin/'+this.props.item}><li className='list-group-item '>{_.capitalize(this.props.item)}</li></Link>
        );
    }

}
class AdminNavigationTab extends Component{
    // NavTabs=['Dashboard','Bookings','Rooms','Room Layouts','Equipment','Food & Drinks','Users','Logout'];
    NavTabs=['dashboard','bookings','rooms','roomLayouts','equipments','foods','users','logout'];
    render(){
        return(
            <div className='col-md-4 '>
                <ul className='list-group'>
                 {this.NavTabs.map((tabName,i)=><TabOptions key={i} item={tabName}/>)}
                </ul>
            </div>
        );
    }
}

export default AdminNavigationTab;
