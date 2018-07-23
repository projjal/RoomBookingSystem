import React,{Component} from 'react';
import {Link } from 'react-router-dom'
import AddRoom from './AddRoom';
import {addRoom} from './roomsAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Modal,Button} from 'react-bootstrap';
class ModalNew extends Component{
    constructor(props){
        super(props);
        this.state={
            imgFile:null,
            formData:null
        }
    }
    postRoomData(formData){
        console.log('form data in modal',formData);
          this.props.addRoom(formData);
          this.props.closeModal();
    }
    render(){
        if(!this.props.show)
            return null;
        return(
            <div>
                <Modal show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                    Add Room  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddRoom updateFormData={(formData)=>{
                                console.log('Received form data',formData)
                                this.postRoomData(formData);
                            }}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleHide}>Cancel</Button>
                </Modal.Footer>
                </Modal>
            


            {/* <div id="roomFormModal" className="modal fade" style={
                {display:"contents", top:"100px"}} role="dialog">
                {console.log('modal state',this.state.formData)}
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Room</h4>
                        </div>
                        <div className="modal-body">
                            <p>Add Room form </p>
                            <AddRoom updateFormData={(formData)=>{
                                console.log('Received form data',formData)
                                this.postRoomData(formData);
                            }}/>
                        </div>
                    </div>

                </div>
                {console.log('form data in modal',this.state.formData)}
            </div>
 */}            </div>
            
        
        )
    }
}

function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        addRoom:addRoom
    },dispatch);
}

export default connect(null,mapPropsToDispatch)(ModalNew);