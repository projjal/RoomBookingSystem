import React,{Component} from 'react';
import {Link } from 'react-router-dom'
import AddFood from './AddFood';
import {addFoods} from './foodsAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ModalNew from './Modal';
export class FoodPanel extends Component{
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
            <div className="panel panel-default">
            <button onClick={(evt)=>{this.toggleModal()}} className="btn btn-primary btn-sm" >+ Add Food items</button>
            </div>
            <ModalNew show={this.state.showModal} closeModal={this.toggleModal}/>
            </div>
        );
    }
}