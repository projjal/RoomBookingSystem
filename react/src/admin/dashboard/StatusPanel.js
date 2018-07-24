import React,{Component} from 'react';
import axios from 'axios';
export default class StatusPanel extends Component{
    constructor(props){
        super(props);
        this.state={
            bookingsForToday:null,
            totalBookings:null
        }
        axios.get('/api/bookings/stats')
        .then(response=>{
            this.setState({bookingsForToday:response.data[0]})
            this.setState({totalBookings:response.data[1]})
        })
        .catch(err=> {throw err;});
    }
    render(){
        return (
            <div>
                <div className="panel panel-default status-panel-bar shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="panel-body container-fluid">
                        <div className="col-md-5 booking-details">
                            <h4>Bookings For Today</h4>
                            <h3>{this.state.bookingsForToday}</h3>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 booking-details">
                            <h4>Total Bookings</h4>
                            <h3>{this.state.totalBookings}</h3>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}