import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import AdminDashboard from './admin/dashboard';
import AdminBookings from './admin/bookings';
import AdminRooms from './admin/rooms';
class AdminMainTab extends Component{
    render(){
        return(
            <div className='col-md-8 no-padding '>
                <main>
                    <Switch>
                        <Route exact path='/dashboard' component={AdminDashboard}/>
                        <Route path='/bookings' component={AdminBookings}/>
                        <Route path='/rooms' component={AdminRooms}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default AdminMainTab;
