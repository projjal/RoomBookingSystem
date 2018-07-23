import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchLayouts} from '../layouts/layoutAction';
class AddRoom extends Component{
    constructor(props){
        super(props);
        this.props.fetchLayouts();
        this.image=""
        this.state={
            id:0,
            image:"",
            type:"",
            capacity:"",
            description:"",
            pricePerDay:0,
            pricePerHour:0,
            status:true,
            layoutId:["1", "2"],
            layoutName:["a layout","b layout"]

        }
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(target.type==='checkbox'){
            console.log(target.checked);
            this.setState({layoutId: [...this.state.layoutId, target.value.split('-')[0]]});
            this.setState({layoutName: [...this.state.layoutName, target.value.split('-')[1]]});           
        }
        else{
            this.setState({
                [name]: value
              });
        }
        
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
    
        /* reader.onload = function(upload) {
          self.setState({
            data_uri: upload.target.result,
          });
        } */

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
                        <input type="text" name="type" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">Capacity</label>
                        <input type="number" name="capacity" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input type="textArea" name="description" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="pricePerDay">Price Per Day</label>
                        <input type="number" step="0.01" min="0" name="pricePerDay" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pricePerHour">Price Per Hour</label>
                        <input type="number" step="0.01" min="0"  name="pricePerHour" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Upload Room Image</label>
                        <input type="file" className="fileupload" onChange={(evt)=>this.handleFile(evt)} name="file" />
                    </div>
                    <div>
                        <img src={this.state.image}/>
                    </div>
                    {this.props.layouts.layouts.map((layout,i)=>{
                        return(
                            <div className="checkbox" key={i}>
                                <label>
                                <input type="checkbox" name={layout.name}  value={layout.id+"-"+layout.name} onChange={(evt)=>this.handleInputChange(evt)} /> {layout.name}</label>
                            </div>
                        );

                    })}

                    <button type="submit" className="btn btn-primary">Add Room</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        layouts:state.layouts
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchLayouts:fetchLayouts,
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(AddRoom);
