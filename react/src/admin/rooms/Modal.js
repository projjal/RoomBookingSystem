import React,{Component} from 'react';
import AddRoom from './AddRoom';
import {addRoom} from './roomsAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Modal,Button} from 'react-bootstrap';
class ModalNew extends Component{
    constructor(props){
        super(props);
        this.state={
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
           </div>
            
        
        )
    }
}

function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        addRoom:addRoom
    },dispatch);
}

export default connect(null,mapPropsToDispatch)(ModalNew);