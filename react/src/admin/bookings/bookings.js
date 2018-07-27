    import React, {Component} from 'react';
    import AddBooking from './addBooking';
    import BookingPanel from './bookingPanel';
    import axios from 'axios';
    import {connect} from 'react-redux';
    import { bindActionCreators } from 'redux';
    import {fetchBookings, deleteBookings} from './bookingAction';
    import BookingTable from './bookingTable';


    export default class AdminBookings extends Component{
        render(){
            return(
                <div>

                <BookingPanel/>
                <BookingTable/>

            
                </div>
            );
        }
    }









