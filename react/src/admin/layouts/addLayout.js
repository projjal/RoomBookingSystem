import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchLayouts} from '../layouts/layoutAction';
class AddLayout extends Component{
    constructor(props){
        super(props);
        this.image=""
        this.state={
            id:0,
            image:"",
            name:""

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
    handleFile(e) {
        var self = this;
        //console.log(self);
        var reader = new FileReader();
        var file = e.target.files[0];

        reader.readAsDataURL(file);
        reader.onload = (e)=> {
            var imgFile=reader.result;
           // console.log('image result',imgFile);
            self.setState({image:imgFile});
        };    
    
      }
    render(){
        if(JSON.stringify(this.props.layouts)===JSON.stringify({})){
            return(<div>Loading form</div>);
        }
        return(
            <div>
                <form onSubmit={(evt)=>this.handleSubmit(evt)}>
                    <div className="form-group">
                        <label htmlFor="type">Title:</label>
                        <input type="text" name="name" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Upload Layout Image</label>
                        <input type="file" className="fileupload" onChange={(evt)=>this.handleFile(evt)} name="file" />
                    </div>
                    <div>
                        <img src={this.state.image}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Add Layout</button>
                </form>
            </div>
        );
    }
}


export default AddLayout;
