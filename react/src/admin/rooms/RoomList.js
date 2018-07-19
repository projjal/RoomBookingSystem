import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchRooms} from './roomsAction';
class RoomList extends Component{
    constructor(props){
        super(props);
        this.props.fetchRooms();
    }
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
        if(JSON.stringify(this.props.rooms) !== JSON.stringify({})){
            console.log('rooms',this.props.rooms.rooms.length);
            return(
                <div>
                    <ul className='list-group col-md-12'>
                    {
                        this.props.rooms.rooms.map((room, i)=>{
                               return this.renderRoomList(room,i);
                        })
                    }
                    </ul>
                </div>
            );
        }
        else{
            console.log('rooms',this.props.rooms);
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
        fetchRooms:fetchRooms
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(RoomList);
