import React, {Component} from 'react';
import AddBooking from './addBooking'


export default class AdminBookings extends Component{
    render(){
        return(
            <div>Bookings Div
            <AddBooking />
            </div>
        );
    }
}