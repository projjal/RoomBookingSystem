import React,{Component} from 'react';
import AddLayout from './addLayout';
import FormModal from '../../utils/formModal';
class LayoutPanel extends Component{
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
            <button onClick={(evt)=>{this.toggleModal()}} className="btn btn-primary btn-sm" >+ Add Layout</button>
            </div>
            <FormModal show={this.state.showModal} closeModal={this.toggleModal} FormComponent={AddLayout} entity="layouts" />
            </div>
        );
    }
}
export default LayoutPanel;