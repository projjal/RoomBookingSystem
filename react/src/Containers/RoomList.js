import React,{Component} from 'react';
import {connect} from 'react-redux';
class RoomList extends Component{
    renderRoomList(room,i){
                return (<li className='list-group-item' key={i}>{room.type}</li>);
    }
    render(){
        return(
            <div>
                <ul className='list-group col-md-12'>
                <li className='list-group-item'> Hi!!! </li> 
                {this.props.rooms.map((room, i)=>this.renderRoomList(room,i))}
                </ul>
            </div>
        );
    }

}
function mapStateToProps(state){
    return{
        rooms:state.rooms
    }
}

export default connect(mapStateToProps)(RoomList);
