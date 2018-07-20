import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import DateAndRoom from './dateAndRoom';
import BookingDateRoom from './bookingDateRoom';
import BookingEquipments from './bookingEquipment';
import BookingFood from './bookingFood';



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
		equipobj:[]
		
	}
	this.addData=this.addData.bind(this)
	this.setRoomPrice=this.setRoomPrice.bind(this)
	this.addEquipData=this.addEquipData.bind(this)
	this.setEquipPrice=this.setEquipPrice.bind(this)
	this.addFoodData=this.addFoodData.bind(this)
	this.setFoodPrice=this.setFoodPrice.bind(this)

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
		<div>
  		<BookingDateRoom prices={this.state.prices} addData={this.addData}
  	       setRoomPrice={this.setRoomPrice}/>
  	       </div>

  	       <div>
  	       <BookingEquipments addEquipData={this.addEquipData}
			setEquipPrice={this.setEquipPrice}/>
  	       </div>

  	       <div>
  	       <BookingFood addFoodData={this.addFoodData}
			setFoodPrice={this.setFoodPrice}/>
  	       </div>
  	{console.log(this.state)}

  	</div>

		);
}
}


export default AddBooking;


//ReactDOM.render(<App/>, document.querySelector(".container"));