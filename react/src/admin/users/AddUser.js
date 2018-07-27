    import React, {Component} from 'react';
    import {connect} from 'react-redux';
    import { bindActionCreators } from 'redux';

    class AddUser extends Component{
        constructor(props){
            super(props);
            this.state={
                id:0,
                mobileNumber:"",
                address:"",
                password:"",
                emailID:""
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
                            <label htmlFor="mobileNumber">Mobile No.</label>
                            <input type="number" name="mobileNumber" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="textarea" name="address" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="emailID">Email</label>
                            <input type="email" name="emailID" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" onChange={(evt)=>this.handleInputChange(evt)}/>
                        </div>
                        
                        
                        

                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
            );
        }
    }



    export default (AddUser);
