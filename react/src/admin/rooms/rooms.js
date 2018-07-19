import React, {Component} from 'react';
import RoomList  from './RoomList';
import RoomPanel from './RoomPanel';
export default class AdminRooms extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <RoomPanel/>
                <RoomList/>
                <div className="modal modal-lg">
                <div id="roomFormModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add Room</h4>
                        </div>
                        <div className="modal-body">
                            <p>Add Room form </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Add Room</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            </div>
        );
    }
    
}