    import React,{Component} from 'react';
    import axios from 'axios';
    export default class StatusPanel extends Component{
        constructor(props){
            super(props);
            this.state={
                bookingsForToday:null,
                totalBookings:null,
                todaysBookings:null
            }
            axios.get('/api/bookings/stats')
            .then(response=>{
                console.log(response);
                this.setState({bookingsForToday:response.data[0]})
                this.setState({totalBookings:response.data[1]})
                this.setState({todaysBookings:response.data[2]})
            })
            .catch(err=> {throw err;});
        }
        render(){
            return (
                <div>
                    <div className="status-panel-bar shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="container-fluid">
                            <div className="col-md-3 booking-details">
                                <h4>Bookings For Today</h4>
                                <h3>{this.state.bookingsForToday}</h3>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4 booking-details">
                                <h4>Bookings Done Today</h4>
                                <h3>{this.state.todaysBookings}</h3>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3 booking-details">
                                <h4>Total Bookings</h4>
                                <h3>{this.state.totalBookings}</h3>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    }