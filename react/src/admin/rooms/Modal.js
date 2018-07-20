import React,{Component} from 'react';
import {Link } from 'react-router-dom'
import AddRoom from './AddRoom';
import {addRoom} from './roomsAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class Modal extends Component{
    postRoomData(){
        // call this function
        var formData= {
            "capacity": 12,
            "description": "A conference room with capacity of 12 people.",
            "id": 0,
            "image": "/img",
            "pricePerDay": 1000,
            "pricePerHour": 10,
            "ststus": true,
            "type": "conference room 2"
          };
          console.log(formData);
        this.props.addRoom(formData);
        this.props.closeModal();
    }
    render(){
        if(!this.props.show)
            return null;
        return(
            
            <div id="roomFormModal" className="modal fade" style={{display:"contents", top:"100px"}} role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Room</h4>
                        </div>
                        <div className="modal-body">
                            <p>Add Room form </p>
                            <AddRoom/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(evt)=>this.postRoomData()}>Add Room</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={(evt)=>this.props.closeModal()}>Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        
        )
    }
}

function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        addRoom:addRoom
    },dispatch);
}

export default connect(null,mapPropsToDispatch)(Modal);