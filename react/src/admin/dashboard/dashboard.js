import React, {Component} from 'react';
import StatusPanel from './StatusPanel';
import axios from 'axios';

class BookingRecord extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li className="list-group-item">
            <div>
                {this.props.data.roomType}<br/>
                Date: {new Date(this.props.data.bookedForDate).toUTCString()}<br/>
                {this.props.data.client.name}
            </div>  
        </li>
        );
        
    }
}
class BookingsOfADate extends Component{
    constructor(props){
        super(props);
        this.state={
            bookingsList:null,
            bookingDate:null
        }
    }
    getBookingDetails(){
        axios.get('/api/bookings/todays')
        .then(response=>{
            console.log('response from bookings for a date', response);

        })
        .catch(error=>{
            throw error;
        })
    }
    render(){
        return(<div>
            {(this.props.bookingDate)?this.props.bookingDate:"Hi"}
        </div>);
    }
}
export default class AdminDashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            latestBookings:null,
            bookingDate:null
        }
        axios.get('/api/bookings/latest')
        .then(response=>{
            this.setState({latestBookings:response.data})
            console.log(response);
        })
        .catch(err=> {throw err;});
    }
    getLatestBookings=()=>{
        if(this.state.latestBookings){
            if(this.state.latestBookings.length>0){
                return(
                    <div>
                        <ul className="list-group">
                            {this.state.latestBookings.map((booking,i)=><BookingRecord data={booking} key={i}/>)}
                        </ul>
                    </div>
                )
            }
            else{
                return(<div> most recent booking info is displayed here
  

                </div>
                );
            }
            
        }
        else{
            return(<div> 
                most recent booking info is displayed here
                
            </div>
            );
        }
    }
    render(){
        return(
            <div>
                <h3 className='div-heading'>Dashboard</h3>
                <StatusPanel/>

                <div className="container-fluid" style={{"padding":"2px","margin":"5px"}} >
                </div>
                <div className="container-fluid">
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading div-heading">
                                 Recent Bookings
                            </div>
                            <div className="div-content">
                                {this.getLatestBookings()}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading div-heading">
                                 Reservations
                            </div>
                            <div className="div-content">
                                Select Date: <input type="date" onChange={evt=>this.setState({bookingDate:evt.target.value})} />
                                
                                <BookingsOfADate bookingDate={this.state.bookingDate}/>                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading div-heading">
                                 Other Info and Quick Links
                            </div>
                            <div className="div-content">
                                <div> need help? contact the super-admin! </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}