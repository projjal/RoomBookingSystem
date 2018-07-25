import React, {Component} from 'react';
import {fetchRooms} from '../admin/rooms/roomsAction';
import {selectRoom} from './endUserAction.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class SubMeetingRooms extends Component{

  render(){
    return(
        <div>
        <h3 className='cat'>{this.props.data.type}</h3>
        <img height="180px" width="250px" src={this.props.data.image}/>
        {/*console.log(this.props.data.image)*/}
        {this.props.data.description}
        <button className="btn btn-primary" style={{"padding":"15px 32px"}} onClick={evt=>this.props.selectRoom(this.props.data)}>Book this room</button>
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
                  <ul>
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
