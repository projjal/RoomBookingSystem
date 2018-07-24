import React,{Component} from 'react';
import {Link } from 'react-router-dom'
import AddUser from './AddUser';
import {addUser} from './usersAction';
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
    postUserData(formData){
        console.log('form data in modal',formData);
          this.props.addUser(formData);
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
                    Add User  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddUser updateFormData={(formData)=>{
                                console.log('Received form data',formData)
                                this.postUserData(formData);
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
        addUser:addUser
    },dispatch);
}

export default connect(null,mapPropsToDispatch)(ModalNew);