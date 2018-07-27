    import React,{Component} from 'react';
    import AddBooking from './addBooking';
    import {Modal,Button} from 'react-bootstrap';



    class ModalNew extends Component{
        
        render(){
            if(!this.props.show)
                return null;
            return(
                <div>
                    <Modal show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                        Add Booking  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddBooking />
                            
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Cancel</Button>
                    </Modal.Footer>
                    </Modal>
            </div>
                
            
            )
        }
    }

    export default ModalNew;