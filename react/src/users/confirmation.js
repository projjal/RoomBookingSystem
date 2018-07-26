import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postBookingDetails} from './endUserAction';
import { bindActionCreators } from 'redux';
import {fetchRoom} from './endUserAction';

class Confirmation extends Component{
  constructor(props){
    super(props);
  }

    showRoomStatus(){
    if(this.props){
      if(this.props.room){
        return(
        <div>
        <h4>Room Details</h4>
        <p>Room selected: {this.props.room.type}</p>
        <p>Price Per Day: {this.props.room.pricePerDay}</p>
        <p>Price Per Hour: {this.props.room.pricePerHour}</p>
        </div>
      )
      }
    }
  }

  showLayoutStatus(){
    if(this.props){
      if(this.props.layout){
        return(
          <div>
            <p>Layout Selected: {this.props.layout.name}</p>
          </div>
        )
      }
    }
  }

  showEquipmentStatus(){
    if(this.props){
      if(this.props.equipments){
        return(
          <div>
            <p>Equipments Selected:</p>
            {this.props.equipments.map((equipment, i)=><p key={i}>Total cost of {equipment.equipment.name} : {equipment.price}</p>)}
          </div>
        )
      }
    }
  }

  showFoodStatus(){
    if(this.props){
      if(this.props.foods){
        return(
          <div>
            <p>Food Items Selected:</p>
            {this.props.foods.map((food, i)=><p key={i}>Total cost of {food.food.name} : {food.price}</p>)}
          </div>
        )
      }
    }
  }

  showBookingDetails(){
    if(this.props){
      if(this.props.roomBookingDetails){
        return(
          <div>
          <p>Room Booking Time Details</p>
          <p>Date of Booking: {this.props.roomBookingDetails.date}</p>
          <p>Number of Attendees: {this.props.roomBookingDetails.attendees}</p>
          </div>
        )
      }
    }
  }

  showClientDetails(){
    if(this.props){
      if(this.props.clientDetails){
        console.log(this.props.clientDetails);
        return(
          <div>
          <div>
          <h4>Personal details</h4>
          <p>Name: {this.props.clientDetails.name}</p><br/>
          <p>Email: {this.props.clientDetails.email}</p><br/>
          </div>

          <div>
          <h4>Billing Address</h4>
          <p>Comapny: {this.props.clientDetails.company}</p><br/>
          <p>State: {this.props.clientDetails.state} City: {this.props.clientDetails.city}</p><br/>
          </div>

          <div>
          <h4>Payment Method</h4>
          <p>Payment Method: {this.props.clientDetails.payment}</p><br/>
          </div>
          </div>
        )

      }
      else{
        return(
          <div>Please enter client details. Incomplete client details will lead to error in booking</div>
        )
      }
    }

  }

  postBooking(){
    var finalBooking = {};
    finalBooking["id"] = 0;
    finalBooking["client"] = this.props.clientDetails.clientDetails;
    finalBooking["foodItems"] = this.props.foods;
    finalBooking["equipmentItems"] = this.props.equipments;
    finalBooking["duration"] = this.props.roomBookingDetails.tofrom;
    finalBooking["room"] = this.props.room;
    finalBooking["room"].image = this.props.fetchRoom.image;
    finalBooking["status"] = "success";
    finalBooking["bookedForDate"] = this.props.roomBookingDetails.date;
    finalBooking["bookingDate"] = Date.now();
    finalBooking["payment"] = this.props.clientDetails.payment;
    finalBooking["total"] = 0;
    finalBooking["layout"] = this.props.layout;
    finalBooking["layout"].image = this.props.fetchLayout.image;
    console.log(finalBooking);
    this.props.postBookingDetails(finalBooking);
  }

  render(){
    return(

      <div>
        <div className="div-content">
        {this.showRoomStatus()}
        {this.showLayoutStatus()}
        {this.showEquipmentStatus()}
        {this.showFoodStatus()}
        {this.showBookingDetails()}
        </div>
        <hr/>
        <div className="div-content">
        {this.showClientDetails()}
        </div>

        <button className="btn btn-primary btn-small" onClick={evt=>this.postBooking()}>Confirm Booking</button>
      </div>

    )
  }
}

function mapStateToProps(state){
return{
  room:state.endUsers.room,
  layout:state.endUsers.layout,
  equipments:state.endUsers.equipments,
  foods:state.endUsers.foods,
  roomBookingDetails:state.endUsers.roomBookingDetails,
  clientDetails:state.endUsers.userDetails,
  fetchRoom:state.endUsers.fetchRoom,
  fetchLayout:state.endUsers.fetchLayout
}
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        postBookingDetails:postBookingDetails
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(Confirmation);
