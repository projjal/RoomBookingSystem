import React,{Component} from 'react';

export default class StatusPanel extends Component{
    render(){
        return (
            <div>
                <div className="panel panel-default status-panel-bar shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="panel-body container-fluid">
                        <div className="col-md-4">
                            <h4>Bookings For Today</h4>
                        </div>
                        <div className="col-md-4">
                            <h4>Bookings Done Today</h4>
                        </div>
                        <div className="col-md-4">
                            <h4>Total Bookings</h4>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}