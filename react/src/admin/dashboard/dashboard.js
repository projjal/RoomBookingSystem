import React, {Component} from 'react';
import StatusPanel from './StatusPanel';
export default class AdminDashboard extends Component{
    render(){
        return(
            <div>
                <h5 className='div-heading'>Dashboard</h5>
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
                                <div> most recent booking info is displayed here</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading div-heading">
                                 Reservations
                            </div>
                            <div className="div-content">
                                <div> reservation info is displayed here</div>
                            </div>
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