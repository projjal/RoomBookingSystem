import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import AdminDashboard from './dashboard/dashboard';
import AdminBookings from './bookings/bookings';
import AdminRooms from './rooms/rooms';
import LoginForm from './login/login';
import AdminEquipments from './equipments/equipments';
import AdminFoods from './food/foods';
import AdminLayout from './layouts/layouts';
import Logout from './logout.js';

class AdminMainTab extends Component{
    render(){
        return(
            <div className='col-md-8 no-padding '>
                <main>
                    <Switch>
                        <Route exact path='/admin/(|dashboard)' component={AdminDashboard}/>
                        <Route path='/admin/bookings' component={AdminBookings}/>
                        <Route path='/admin/rooms' component={AdminRooms}/>
                        {/* <Route path='/login' component={LoginForm}/> */}
                        <Route path='/admin/equipments' component={AdminEquipments}/>
                        <Route path='/admin/foods' component={AdminFoods}/>
                        <Route path='/admin/roomLayouts' component={AdminLayout}/>
                        <Route path='/admin/logout' component={Logout}/>

                    </Switch>
                </main>
            </div>
        );
    }
}

export default AdminMainTab;
