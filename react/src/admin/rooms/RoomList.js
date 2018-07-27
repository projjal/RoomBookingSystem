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
                                <img src={room.image} className="media-object" height="42" width="42"/>
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

            showAddErrorStatus(){
                if(this.props.rooms.error){
                    return(<div>Error in adding room. Please try again</div>);
                }
                else{
                    return(<div></div>);
                }
            }
            render(){
                if(JSON.stringify(this.props.rooms) !== JSON.stringify({})){
                    console.log('rooms',this.props.rooms.rooms.length);
                    if(this.props.rooms.rooms.length>0){
                        var arr = Object.keys(this.props.rooms.rooms[0]);
                        console.log(arr);
                        var arr1=["id","image","type","capacity","description","button"];
                        return(
                        <div>
                            {this.showAddErrorStatus()}
                            {console.log("In here")}
                            {console.log(this.props.rooms.rooms)}
                            <TableView heading={arr1} data={this.props.rooms.rooms} entity="rooms"/>
                        </div>
                    );
                    }
                    else{
                        
                        return(
                            <div>No room record present. </div>
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
                deleteRoom:deleteRoom
            },dispatch);
        }

        export default connect(mapStateToProps,mapPropsToDispatch)(RoomList);
