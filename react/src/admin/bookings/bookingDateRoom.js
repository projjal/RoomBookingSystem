import React, {Component} from 'react';
import DateAndTime from './dateAndTime';
import RoomList from './roomslist';
import Duration from './duration';
import axios from 'axios';


class BookingDateRoom extends Component{


	constructor(props){
		super(props)
		this.state={
			roomsList :[],
    		layout:[],
    		duration:[],
    		rprice:0,
    		obj1:{}
    		
		}
		this.handleChange1=this.handleChange1.bind(this);
		this.handleChange2=this.handleChange2.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.submitForm=this.submitForm.bind(this);
		this.func=this.func.bind(this);
		
		
		axios.get('/api/rooms/',{ 'headers': {} })
   .then(res => this.func(res.data));

   //console.log(this.state.roomsList);

		
	}

	func(res)
	{
		this.setState({roomsList:res});
	}



	submitForm(e)
	{
		
		e.preventDefault();
		this.props.addData(this.state.obj1);
		this.props.setRoomPrice(this.state.rprice);
	}

	handleChange(event)
	{
	   var updatedState={};
       updatedState[event.target.name]=event.target.value;
       var prev=this.state.obj1;
       var obj2=Object.assign(prev,updatedState);
       this.setState({obj1:obj2});
       
	}

	    handleChange1(event)
        {
        	var updatedState={};
       updatedState[event.target.name]=event.target.value;
       var prev=this.state.obj1;
       var obj2=Object.assign(prev,updatedState);
       this.setState({obj1:obj2});

        	for(var i=0,len=this.state.roomsList.length;i<len;i++)
        	{
        		if(event.target.value==this.state.roomsList[i].type)
        			 {
        			 	this.setState({rprice:this.state.roomsList[i].pricePerHour})
        			 	 this.setState({layout:this.state.roomsList[i].layoutName});
        			 	 break;
        			 }
        	}
        }


	    handleChange2(event)
        {
        	var updatedState={};
       updatedState[event.target.name]=event.target.value;
       var prev=this.state.obj1;
       var obj2=Object.assign(prev,updatedState);
       this.setState({obj1:obj2});
        	
        	if(event.target.value=="hourly")
        		this.setState({duration:Duration().hourly});
        	else if(event.target.value=="halfDay")
        		this.setState({duration:Duration().halfdays});
        	else

        		this.setState({duration:["Full Day"]});
        }


	render()
	{
			

		return(



			<div className="container-fluid">
			
			

			<form onSubmit={this.submitForm} className="forms">

			<table className="col-md-6">
			<tbody>

			 <tr>
			 <td><label>Created on</label></td>
			 <td><label ref="currentDate"><DateAndTime/></label></td>
			 </tr>

			

			 <tr>
			 <td><label>Date</label></td>
			 <td><input type="date" name="date" required ref="date" onChange={this.handleChange}/></td>
			 </tr>

			 <tr>
			 <td><label>Attendees</label></td>
			 <td><input type="number" name="attendees" required ref="attendees" onChange={this.handleChange}/></td>
			 </tr>

			 <tr>
			 <td><label>Room</label></td>
			 <td><select name="room" ref="room" onChange={this.handleChange1}>
			 <option value="select">Select</option>
            	{this.state.roomsList.map((room, key)=> <option key={key} value={room.type}>{room.type}</option>)}
         	 </select></td>
			 </tr>

			  <tr>
			 <td><label>Layout</label></td>
			 <td><select name="layout" ref="layout" onChange={this.handleChange}>
			 <option value="select">Select</option>
            {this.state.layout.map((lout, key)=> <option key={key} value={lout}>{lout}</option>)}
         	 </select></td>
			 </tr>

			 <tr>
			 <td><label>Duration</label></td>
			 <td><select name="duration" ref="duration" onChange={this.handleChange2}>
			 <option value="select">Select</option>
			 <option value="hourly">Hourly</option>
            <option value="halfDay">Half-day</option>
            <option value="fullDay">Full Day</option>
            
          	</select></td>
			 </tr>



			 <tr>
			 <td><label>To-From</label></td>
			 <td><select name="tofrom" ref="tofrom" onChange={this.handleChange}>
			 <option value="select">Select</option>
            {this.state.duration.map((dur, key)=> <option key={key} value={dur}>{dur}</option>)}
          	</select></td>
			 </tr>

			 <tr>
			 <td> </td>
			 <td> <br/></td>
			 </tr>

			  <tr>
			 <td> </td>
			 <td> <br/></td>
			 </tr>

			 <tr>
			 <td></td>
			 <td><input className="btn btn-primary button"   type="submit" value="Save"/></td>
			 
			 <td></td>
			 </tr>


			</tbody>
			</table>	

			<table className="col-md-6">
			<tbody>
	 		
	 		<tr>
			 <td><label>Status</label></td>
			 <td><select name="status" ref="status" onChange={this.handleChange}>
			 <option value="select">Select</option>
            <option value="pending">Pending</option>
            <option value="success">Success</option>
         	 </select></td>
			 </tr>

			 <tr>
			 <td><label>Payment Method</label></td>
			 <td><select name="payment" ref="payment" onChange={this.handleChange}>
			 <option value="select">Select</option>
            <option value="cash">Cash</option>
          	</select></td>
			 </tr>
		
			<tr>
			 <td><label>Room Price</label></td>
			 <td><input type="number" name="roomPrice"  readOnly ref="roomPrice"
			  value={this.props.prices.roomPrice}/></td>
			 </tr>

			 <tr>
			 <td><label>Equipment Price</label></td>
			 <td><input type="number" name="equipPrice" readOnly ref="equipPrice"
			  value={this.props.prices.equipPrice}/></td>
			 </tr>

			 <tr>
			 <td><label>Food & Drink price</label></td>
			 <td><input type="number" name="foodPrice" readOnly ref="foodPrice"
			  value={this.props.prices.foodPrice}/></td>
			 </tr>

			 <tr>
			 <td><label>Sub-total</label></td>
			 <td><input type="number" name="subTotal" readOnly ref="subTotal"
			  value={this.props.prices.subTotal}/></td>
			 </tr>

			 <tr>
			 <td><label>Tax</label></td>
			 <td><input type="number" name="tax" readOnly ref="tax"
			  value={this.props.prices.tax}/></td>
			 </tr>

			  <tr>
			 <td><label>Total</label></td>
			 <td><input type="number" name="total" readOnly ref="total"
			  value={this.props.prices.total}/></td>
			 </tr>


			  <tr>
			 <td><label>Deposit</label></td>
			 <td><input type="number" name="deposit" readOnly ref="deposit"
			  value={this.props.prices.deposit}/></td>
			 </tr>



			</tbody>
			</table>
			</form>

		
		 </div>


			);
	}

}

export default BookingDateRoom;
