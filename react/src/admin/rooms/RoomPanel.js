import React,{Component} from 'react';
import {Link } from 'react-router-dom'
import AddRoom from './AddRoom';
import {addRoom} from './roomsAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from './Modal';
export class RoomPanel extends Component{
    constructor(props){
        super(props);
        this.state={showModal: false}
        this.toggleModal= this.toggleModal.bind(this)
    }
    toggleModal(){
        console.log(this);
        this.setState({showModal:!this.state.showModal});
    }
    render(){
        console.log(this);
        return(
            <div>
            <div className="panel panel-default">
            {/* <Link to={'/rooms/addRoom'}> */}<button onClick={(evt)=>{this.toggleModal()}} className="btn btn-primary btn-sm" >+ Add Room</button>{/* </Link> */}
            </div>
            <Modal show={this.state.showModal} closeModal={this.toggleModal}/>
            </div>
        );
    }
}

