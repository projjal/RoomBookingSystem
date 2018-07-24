import React,{Component} from 'react';
import {Link } from 'react-router-dom'
import AddFood from './AddFood';
import {addFoods} from './foodsAction';
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
    postFoodData(formData){
        console.log('form data in modal',formData);
          this.props.addFoods(formData);
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
                    Add Food items  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddFood updateFormData={(formData)=>{
                                console.log('Received form data',formData)
                                this.postFoodData(formData);
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
        addFoods:addFoods
    },dispatch);
}

export default connect(null,mapPropsToDispatch)(ModalNew);