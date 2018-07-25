import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
class UserStatus extends Component{
  showRoomStatus(){
    if(this.props){
      if(this.props.room)
        console.log(this.props.room);
    }
  }
  render(){
    return(
      <div className='col-md-3'><h4>Status bar here</h4>
      {this.showRoomStatus()}
      </div>
      
    )
  }
}
function mapStateToProps(state){
  return{
    room:state.endUsers.room
  }
}
export default connect(mapStateToProps)(UserStatus);
