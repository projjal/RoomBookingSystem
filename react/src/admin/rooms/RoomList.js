import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchRooms, deleteRoom} from './roomsAction';
import TableView from '../../utils/index.js';
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
                        <img src={room.image} className="media-object" />
                    </div>
                    <div className="media-body container-fluid">
                    <div className="col-md-3">{room.type}</div>
                    <div className="col-md-3">{room.description}</div>
                    <div className="col-md-1">{room.capacity}</div>
                    <div className="col-md-2">{status[room.ststus]} </div>
                    <div className="col-md-1"><button className="btn btn-primary btn-sm"> Edit</button></div>
                    <div className="col-md-2"><button className="btn btn-primary btn-sm" onClick={(evt)=>this.props.deleteRoom(room)}>Delete</button></div>
                    </div>
                 </div>
                </li>);
    }
    render(){
        if(JSON.stringify(this.props.rooms) !== JSON.stringify({})){
            console.log('rooms',this.props.rooms.rooms.length);
            /*Commented changes use the general table*/
            // var arr = Object.keys(this.props.rooms.rooms[0]);
            // console.log(arr);
            // return(
            // <div>
            // {console.log("In here")}
            // {console.log(this.props.rooms.rooms)}
            // <TableView heading={arr} data={this.props.rooms.rooms}/>
            // </div>
            // );
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
        fetchRooms:fetchRooms,
        deleteRoom:deleteRoom
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(RoomList);
