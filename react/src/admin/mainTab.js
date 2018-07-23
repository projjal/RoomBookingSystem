import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import AdminDashboard from './dashboard/dashboard';
import AdminBookings from './bookings/bookings';
import AdminRooms from './rooms/rooms';
import LoginForm from './login/login';

class AdminMainTab extends Component{
    render(){
        return(
            <div className='col-md-8 no-padding '>
                <main>
                    <Switch>
                        <Route exact path='/(|dashboard)' component={AdminDashboard}/>
                        <Route path='/bookings' component={AdminBookings}/>
                        <Route path='/rooms' component={AdminRooms}/>
                        <Route path='/login' component={LoginForm}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default AdminMainTab;
