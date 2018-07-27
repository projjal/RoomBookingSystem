	import React, {Component} from 'react';
	import DateAndTime from './dateAndTime';
	import axios from 'axios';


	class BookingDateRoom extends Component{


		constructor(props)
		{
			super(props)
			this.state={
				roomsList :[],
				layout:[],
				duration:[],
				rprice:0,
				roomsData:{}
				
			}

			this.handleChange1=this.handleChange1.bind(this);
			this.handleChange2=this.handleChange2.bind(this);
			this.handleChange3=this.handleChange3.bind(this);
			this.handleChange=this.handleChange.bind(this);
			this.submitForm=this.submitForm.bind(this);
			this.setRoomList=this.setRoomList.bind(this);
			this.setDuration=this.setDuration.bind(this);
			
			
			axios.get('/api/rooms/',{ 'headers': {} })
			.then(res => this.setRoomList(res.data));

			
		}

		setRoomList(res)
		{
			this.setState({roomsList:res});
		}

		setDuration(res)
		{
			this.setState({duration:res});
		}



		submitForm(e)
		{
			
			e.preventDefault();
			this.props.addData(this.state.roomsData);
			this.props.setRoomPrice(this.state.rprice);
		}

		handleChange(event)
		{
			var updatedState={};
			updatedState[event.target.name]=event.target.value;
			var prev=this.state.roomsData;
			var obj2=Object.assign(prev,updatedState);
			this.setState({roomsData:obj2});
		
		}

		handleChange1(event)
		{
			var updatedState={};
				
			for(var i=0,len=this.state.roomsList.length;i<len;i++)
			{
				if(this.state.roomsList[i].id==event.target.value)
				{
					updatedState[event.target.name]=this.state.roomsList[i];
				}
			}

			var prev=this.state.roomsData;
			var obj2=Object.assign(prev,updatedState);
			this.setState({roomsData:obj2});

			for(var i=0,len=this.state.roomsList.length;i<len;i++)
			{
				if(event.target.value==this.state.roomsList[i].id)
				{
					this.setState({rprice:this.state.roomsList[i].pricePerHour})
					this.setState({layout:this.state.roomsList[i].layoutItems});
					break;
				}
			}
		}


		handleChange2(event)
		{
			var updatedState={};
			updatedState[event.target.name]=event.target.value;
			var prev=this.state.roomsData;
			var obj2=Object.assign(prev,updatedState);
			this.setState({roomsData:obj2});

			

			var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
			var dt=this.state.roomsData.date;
			var y=parseInt(dt.slice(0,4));
			var m=parseInt(dt.slice(5,7));
			var d=parseInt(dt.slice(8,10));
			var dat=months[m-1]+" "+d+" "+y;
				
			axios.get("/api/bookings/getSlots?roomId="+this.state.roomsData.room.id+"&bookingDate="+dat
			+"&slot="+event.target.value).then((res)=>this.setDuration(res.data));
		}



		handleChange3(event)
		{
			var updatedState={};
				
			for(var i=0,len=this.state.layout.length;i<len;i++)
			{
				if(this.state.layout[i].id==event.target.value)
				{
					updatedState[event.target.name]=this.state.layout[i].layout;
				}
			}
			var prev=this.state.roomsData;
			var obj2=Object.assign(prev,updatedState);
			this.setState({roomsData:obj2});
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
				<td><input type="number" name="attendees" min="0" required ref="attendees" onChange={this.handleChange}/></td>
				</tr>

				<tr>
				<td><label>Room</label></td>
				<td><select name="room" ref="room" required onChange={this.handleChange1}>
				<option value="">Select</option>
					{this.state.roomsList.map((room, key)=> <option key={key} value={room.id}>{room.type}</option>)}
				</select></td>
				</tr>

				<tr>
				<td><label>Layout</label></td>
				<td><select name="layout" ref="layout" required onChange={this.handleChange3}>
				<option value="">Select</option>
				{this.state.layout.map((lout, key)=> <option key={key} value={lout.id}>{lout.layout.name}</option>)}
				</select></td>
				</tr>

				<tr>
				<td><label>Duration</label></td>
				<td><select name="duration" ref="duration" required onChange={this.handleChange2}>
				<option value="">Select</option>
				<option value="Hourly">Hourly</option>
				<option value="Half-day">Half-day</option>
				<option value="fullDay">Full Day</option>
				
				</select></td>
				</tr>



				<tr>
				<td><label>To-From</label></td>
				<td><select name="tofrom" ref="tofrom" required onChange={this.handleChange}>
				<option value="">Select</option>
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
				<td><select name="status" ref="status" required onChange={this.handleChange}>
				<option value="">Select</option>
				<option value="pending">Pending</option>
				<option value="success">Success</option>
				</select></td>
				</tr>

				<tr>
				<td><label>Payment Method</label></td>
				<td><select name="payment" ref="payment" required onChange={this.handleChange}>
				<option value="">Select</option>
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
