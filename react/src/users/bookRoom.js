import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class BookRoomForm extends Component{
  render(){
    return(
      <div>
      <form>
      <label>Date</label>
      <input type="date" name="date" required/>
      <label>Duration</label>
      </form>
      </div>
    )
  }
}

class BookRoom extends Component{
render(){
  if(this.props){
    if(this.props.room){
      return(
        <div>
        <h1>Book Page</h1>
        <h3>{this.props.room.type}</h3>
        <p>Capacity: {this.props.room.capacity} people</p>
        <BookRoomForm/>
        </div>
      )
    }
    else{
      return(
        <div>You have not selected a room. Go back and select one</div>
      )
    }
  }
  else{
        return(
          <div>Loading ...</div>
        )
    }
}
}


function mapStateToProps(state){
    return{
      room:state.endUsers.room,
      roomBookingDetails:state.endUsers.roomBookingDetails
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(BookRoom);
