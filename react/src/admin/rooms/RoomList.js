import React,{Component} from 'react';
import {connect} from 'react-redux';
class RoomList extends Component{

    renderRoomList(room,i){
        var status=["Booked","Available"];
                return (<li className='list-group-item' key={i}>
                <div className="media">
                    <div className="media-left">
                        <img src="img_avatar1.png" className="media-object" />
                    </div>
                    <div className="media-body container-fluid">
                    <div className="col-md-3">{room.type}</div>
                    <div className="col-md-3">{room.description}</div>
                    <div className="col-md-1">{room.capacity}</div>
                    <div className="col-md-2">{status[room.ststus]} </div>
                    <div className="col-md-1"><button>Edit</button></div>
                    <div className="col-md-2"><button>Delete</button></div>
                    </div>
                 </div>
                </li>);
    }
    render(){
        return(
            <div>
                <ul className='list-group col-md-12'>
                {
                    this.props.rooms.map((room, i)=>{
                           return this.renderRoomList(room,i);
                    })
                }
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
