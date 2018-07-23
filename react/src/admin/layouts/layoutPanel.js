import React,{Component} from 'react';
import LayoutModal from './layoutModal';
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
            <div className="panel panel-default">
            <button onClick={(evt)=>{this.toggleModal()}} className="btn btn-primary btn-sm" >+ Add Layout</button>
            </div>
            <LayoutModal show={this.state.showModal} closeModal={this.toggleModal}/>
            </div>
        );
    }
}
export default LayoutPanel;