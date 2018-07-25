import React,{Component} from 'react';
import {Link } from 'react-router-dom'
import AddEquipment from './AddEquipment';
import {addEquipment} from './equipmentsAction';
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
    postEquipmentData(formData){
        console.log('form data in modal',formData);
          this.props.addEquipment(formData);
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
                    Add Equipment  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEquipment updateFormData={(formData)=>{
                                console.log('Received form data',formData)
                                this.postEquipmentData(formData);
                            }}/>
                </Modal.Body>
                </Modal>
           </div>
            
        
        )
    }
}

function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        addEquipment:addEquipment
    },dispatch);
}

export default connect(null,mapPropsToDispatch)(ModalNew);