import React,{Component} from 'react';
import AddRoom from './AddRoom';
import FormModal from '../../utils/formModal';

export class RoomPanel extends Component{
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
            <button onClick={(evt)=>{this.toggleModal()}} className="btn btn-primary btn-sm" >+ Add Room</button>
            </div>
            <FormModal show={this.state.showModal} closeModal={this.toggleModal} FormComponent={AddRoom} entity="rooms" />

{/*             <ModalNew show={this.state.showModal} closeModal={this.toggleModal}/>
 */}            </div>
        );
    }
}

