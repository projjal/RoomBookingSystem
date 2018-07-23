import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import DateAndRoom from './dateAndRoom';
import BookingDateRoom from './bookingDateRoom';
import BookingEquipments from './bookingEquipment';
import BookingFood from './bookingFood';
import BookingClientDetails from './bookingClientDetails';
import {Tabs, Tab} from 'react-bootstrap';



class AddBooking extends Component{

constructor(props)
{
	super(props)
	this.state={
		prices:{
		"roomPrice":0,
		"equipPrice":0,
		"foodPrice":0,
		"subTotal":0,
		"tax":0,
		"total":0,
		"deposit":0
	},
		obj:{},
		equipobj:[],
		clientobj:{}
		
	}
	this.addData=this.addData.bind(this)
	this.setRoomPrice=this.setRoomPrice.bind(this)
	this.addEquipData=this.addEquipData.bind(this)
	this.setEquipPrice=this.setEquipPrice.bind(this)
	this.addFoodData=this.addFoodData.bind(this)
	this.setFoodPrice=this.setFoodPrice.bind(this)
	this.addClientData=this.addClientData.bind(this)

}

addData(obj1){
	this.setState({obj:obj1})
}

addEquipData(obj1){
	this.setState({equipobj:obj1})
}

addFoodData(obj1){
	this.setState({foodobj:obj1})
}

addClientData(obj1){
	this.setState({clientobj:obj1})
}

setRoomPrice(val){
	var updated=this.state.prices;
	updated.roomPrice=val;
	this.setState({prices:updated});
}


setEquipPrice(val){
	var updated=this.state.prices;
	updated.equipPrice=val;
	this.setState({prices:updated});
}

setFoodPrice(val){
	var updated=this.state.prices;
	updated.foodPrice=val;
	this.setState({prices:updated});
}






render()
{
	return(
		<div>

		<Tabs defaultActiveKey={1} >

		<Tab eventKey={1} title="Booking Details">

		<div className="formdiv">
		<h6 className="formhead">Date & Room</h6>
  		<BookingDateRoom prices={this.state.prices} addData={this.addData}
  	       setRoomPrice={this.setRoomPrice}/>
  	       </div>

  	       <hr></hr>

  	       <div className="formdiv">
  	       <h6 className="formhead">Equipment</h6>
  	       <BookingEquipments addEquipData={this.addEquipData}
			setEquipPrice={this.setEquipPrice}/>
  	       </div>

  	        <hr></hr>

  	       <div className="formdiv">
  	       <h6 className="formhead">Food & Drinks</h6>
  	       <BookingFood addFoodData={this.addFoodData}
			setFoodPrice={this.setFoodPrice}/>
  	       </div>

  	        <hr></hr>

  	        </Tab>

  	        <Tab eventKey={2} title="Client Details">

  	       <div className="formdiv">
		<BookingClientDetails addClientData={this.addClientData}/>
  		</div>

  		</Tab>
  		</Tabs>

  	{console.log(this.state)}

  	</div>

		);
}
}


export default AddBooking;


//ReactDOM.render(<App/>, document.querySelector(".container"));