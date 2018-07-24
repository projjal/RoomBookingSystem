import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class AddFood extends Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            name:"",
            price:""
        }
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
                [name]: value
              });
        }

    handleSubmit(e){
        e.preventDefault();
        var self=this;
        console.log(this.image);
        this.props.updateFormData(this.state);
    }
    
    render(){
        if(JSON.stringify(this.props.layouts)===JSON.stringify({})){
            return(<div>Loading form</div>);
        }
        return(
            <div>
                <form onSubmit={(evt)=>this.handleSubmit(evt)}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Food items</button>
                </form>
            </div>
        );
    }
}


export default (AddFood);