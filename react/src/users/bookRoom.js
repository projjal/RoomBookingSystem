import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addRoomBookingDetails} from './endUserAction';
import axios from 'axios';

class BookRoomForm extends Component{
  constructor(props){
      super(props);
      this.state={
        date:"",
        duration:"",
        tofrom1:[],
        tofrom:"",
        attendees:0
      }

      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }

  func2(res)
  {
    this.setState({tofrom1:res});
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if(target.type === 'date'){
      this.setState({date:value})
    }
    else if(target.name === 'duration'){
      this.setState({duration:value})
      
        var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var dt=this.state.date;
 		    var y=parseInt(dt.slice(0,4));
 		    var m=parseInt(dt.slice(5,7));
 		    var d=parseInt(dt.slice(8,10));
 		    var dat=months[m-1]+" "+d+" "+y;
        console.log("HAIII", this.props.room);
        console.log("Date here ", dat);
        axios.get("/api/bookings/getSlots?roomId="+this.props.room.id+"&bookingDate="+dat
         		+"&slot="+target.value).then((res)=>{this.func2(res.data)});

    }
    else if(target.name === 'tofrom'){
      this.setState({tofrom:value})
    }
    else if(target.name === 'attendees'){
      this.setState({attendees:value})
    }

  }
  handleSubmit(e){
    e.preventDefault();
    var self=this;
    console.log(this.state);
    this.props.bookRoomDetails(this.state);
}

  render(){
    return(
      <div>
      <form className="forms">

      <table>
      <tr className="form-group">
        <td> <label>Date</label> </td>
        <td> <input type="date" name="date" className="form-control" required onChange={(evt)=>this.handleChange(evt)}/> </td>
      </tr>

      <tr className="form-group">
      <td><label>Duration</label></td>
      <td><select type="duration" name="duration" className="form-control" required onChange={(evt)=>this.handleChange(evt)}>
          <option value="select">Select</option>
          <option value="Half-day">Half-day</option>
          <option value="fullDay">Full Day</option>
          <option value="Hourly">Hourly</option>
        </select></td>
      </tr>

      <tr className="form-group">
        <td><label>To-From</label></td>
        <td><select name="tofrom" ref="tofrom" className="form-control" required onChange={(evt)=>this.handleChange(evt)}>
          <option value="select">Select</option>
          {this.state.tofrom1 && this.state.tofrom1.map((tim,key)=><option key={key} value={tim}>{tim}</option>)}
        </select></td>
      </tr>

      <tr className="form-group">
        <td><label>Attendees</label></td>
        <td><input type="number" name="attendees" className="form-control" required ref="attendees" onChange={(evt)=>this.handleChange(evt)}/></td>
      </tr>

      <tr className="form-group">
      <input className="btn btn-primary button"  type="submit" value="Save" onClick={(evt)=>this.handleSubmit(evt)}/>
      </tr>

      </table>
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
        <h4>{this.props.room.type}</h4>
        <p>Capacity: {this.props.room.capacity} people</p>
        <BookRoomForm bookRoomDetails={(formData)=>this.props.addRoomBookingDetails(formData)} room={this.props.room}/>
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
      addRoomBookingDetails:addRoomBookingDetails
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(BookRoom);
