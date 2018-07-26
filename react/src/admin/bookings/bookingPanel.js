import React,{Component} from 'react';
import {Link } from 'react-router-dom'

import ModalNew from './modal';


class BookingPanel extends Component{
    constructor(props){
        super(props);
        this.state={showModal: false}
        this.toggleModal= this.toggleModal.bind(this)
    }
    toggleModal(){
        this.setState({showModal:!this.state.showModal});
    }
    render(){
        return(
            <div>
            <div className="div-heading">
            <button onClick={(evt)=>{this.toggleModal()}} className="btn btn-primary btn-sm" >+ Add Booking</button>
            </div>
            <ModalNew show={this.state.showModal} closeModal={this.toggleModal}/>
            </div>
        );
    }
}

export default BookingPanel;

