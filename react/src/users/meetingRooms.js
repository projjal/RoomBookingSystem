import React, {Component} from 'react';
import {fetchRooms} from '../admin/rooms/roomsAction';
import {selectRoom} from './endUserAction.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class SubMeetingRooms extends Component{

    renderImage(){
        
    }
  render(){
    return(
        <div className="container-fluid room-record">
          <div className="col-md-4">
            <h4 className='cat'>{this.props.data.type}</h4>
            <img height="180px" width="250px" src={this.props.data.image}/>
          </div>
          <div className="col-md-4 room-description">
            <p>{this.props.data.description}</p>
          </div>
          <div className="col-md-4 book-button">
            <button className="btn btn-primary btn-small" onClick={evt=>this.props.selectRoom(this.props.data)}>Book this room</button>
            </div>
        </div>
    )
  }
}

class MeetingRooms extends Component{
  constructor(props){
      super(props);
      this.props.fetchRooms();
  }
  render(){
      if(JSON.stringify(this.props.rooms) !== JSON.stringify({})){
          if(this.props.rooms.rooms.length>0){
              var arr = Object.keys(this.props.rooms.rooms[0]);
              var arr1=["id","type","capacity","image","button"];
              return(
              <div>
                  <ul className="ul-room">
                  {this.props.rooms.rooms.map((rooms, i)=><li key={i}><SubMeetingRooms data={rooms} selectRoom={(data)=>this.props.selectRoom(data)}/></li>)}
                  </ul>
              </div>
           );
          }
          else{
              return(
                  <div>Loading...</div>
              );
          }
      }
      else{
          return(
              <div>Loading...</div>
          );
      }

  }

}
function mapStateToProps(state){
    return{
        rooms:state.rooms
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchRooms:fetchRooms,
        selectRoom:selectRoom
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(MeetingRooms);
