import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class UserStatus extends Component{
  showRoomStatus(){
    if(this.props){
      if(this.props.room){
        return(
        <div>
        <p>Room selected: {this.props.room.type}</p>
        <img height="180px" width="250px" src={this.props.room.image}/>
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
        console.log("yoiyoi", this.props.roomBookingDetails);
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

  render(){
    return(

      <div className='col-md-3 status-sidebar'>
        <h4>{(this.props)?"Booking Details: ":""}</h4>
        {this.showRoomStatus()}
        {this.showLayoutStatus()}
        {this.showEquipmentStatus()}
        {this.showFoodStatus()}
        {this.showBookingDetails()}
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
    roomBookingDetails:state.endUsers.roomBookingDetails
  }
}
export default connect(mapStateToProps)(UserStatus);
