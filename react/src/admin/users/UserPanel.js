    import React,{Component} from 'react';
    import AddUser from './AddUser';
    import FormModal from '../../utils/formModal';

    export class UserPanel extends Component{
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
                <button onClick={(evt)=>{this.toggleModal()}} className="btn btn-primary btn-sm" >+ Add User</button>
                </div>
                <FormModal show={this.state.showModal} closeModal={this.toggleModal} FormComponent={AddUser} entity="users" />
                </div>
            );
        }
    }