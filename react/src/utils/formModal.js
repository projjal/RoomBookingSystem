    import React,{Component} from 'react';
    import {addRoom} from '../admin/rooms/roomsAction';
    import {addUser} from '../admin/users/usersAction';
    import {addLayout} from '../admin/layouts/layoutAction';
    import {addEquipment} from '../admin/equipments/equipmentsAction';
    import {addFoods} from '../admin/food/foodsAction';
    import {connect} from 'react-redux';
    import { bindActionCreators } from 'redux';
    import {Modal,Button} from 'react-bootstrap';
    import _ from 'lodash';
    class FormModal extends Component{
        constructor(props){
            super(props);
            this.state={
                formData:null
            }
        }
        postRoomData(formData){
            console.log('form data in modal',formData);
            switch(this.props.entity){
                case "rooms":{ 
                this.props.addRoom(formData);
                break;
                }
                case "layouts":{ 
                    this.props.addLayout(formData);
                    break;
                }
                case "foods":{ 
                    this.props.addFood(formData);
                    break;
                }
                case "equipments":{
                    this.props.addEquipment(formData);
                    break;
        
                }
                case "users":{
                    this.props.addUser(formData);
                }
            }
            this.props.closeModal();
            //this.props.addRoom(formData);
            
        }
        render(){
            if(!this.props.show)
                return null;
            return(
                <div>
                    <Modal show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                        Add {_.capitalize(this.props.entity)}  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <this.props.FormComponent updateFormData={(formData)=>{
                                    console.log('Received form data',formData)
                                    this.postRoomData(formData);
                                }}/>
                    </Modal.Body>
                    </Modal>
            </div>
                
            
            )
        }
    }

    function mapPropsToDispatch(dispatch){
        return bindActionCreators({
            addRoom:addRoom,
            addLayout:addLayout,
            addFood:addFoods,
            addEquipment:addEquipment,
            addUser:addUser
        },dispatch);
    }

    export default connect(null,mapPropsToDispatch)(FormModal);