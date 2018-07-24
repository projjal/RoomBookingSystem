import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import AdminDashboard from './dashboard/dashboard';
import AdminBookings from './bookings/bookings';
import AdminRooms from './rooms/rooms';
import LoginForm from './login/login';
import AdminEquipments from './equipments/equipments';
import AdminFoods from './food/foods';
import AdminLayout from './layouts/layouts';
class AdminMainTab extends Component{
    render(){
        return(
            <div className='col-md-8 no-padding '>
                <main>
                    <Switch>
                        <Route exact path='/(|dashboard)' component={AdminDashboard}/>
                        <Route path='/bookings' component={AdminBookings}/>
                        <Route path='/rooms' component={AdminRooms}/>
                        {/* <Route path='/login' component={LoginForm}/> */}
                        <Route path='/equipments' component={AdminEquipments}/>
                        <Route path='/foods' component={AdminFoods}/>
                        <Route path='/roomLayouts' component={AdminLayout}/>

                    </Switch>
                </main>
            </div>
        );
    }
}

export default AdminMainTab;
