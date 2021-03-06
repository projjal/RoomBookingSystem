import React, {Component} from 'react';
import {fetchLayouts} from '../admin/layouts/layoutAction';
import {fetchEquipments} from '../admin/equipments/equipmentsAction';
import {selectLayout} from './endUserAction.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import BookingEquipments from './bookingEquipment.js';
import {fetchLayout} from './endUserAction';
import Button from '@react/react-spectrum/Button';

class LayoutList extends Component{
render(){
    return(
    <div className="col-md-4">
        <h4>{this.props.data.name}</h4>
        <img height="100px" width="150px" src={this.props.data.image}/>
        <br/><br/>
        <Button variant="primary" label="Select" onClick={evt=>{this.props.selectLayout(this.props.data); this.props.fetchLayout(this.props.id);}}/>
    </div>
    )
}

}

class RoomSetup extends Component{
constructor(props){
    super(props);
    this.props.fetchLayouts();
    this.props.fetchEquipments();
}
render(){
    if(this.props.room){
    if(JSON.stringify(this.props.layouts) !== JSON.stringify({})){
        if(this.props.layouts.layouts.length>0){
            var arr = Object.keys(this.props.layouts.layouts[0]);
            console.log(arr);
            return(
            <div>
                <div style={{"display":"block"}}>
                    <h3>Layouts</h3>
                    {this.props.layouts.layouts.map((layouts, i)=><LayoutList data={layouts} key={i} id={layouts.id} selectLayout={(data)=>this.props.selectLayout(data)} fetchLayout={(id)=>this.props.fetchLayout(id)}/>)}
                </div>
                <div style={{"display":"inline-flex"}}>
                    <div><h3>Equipments</h3></div>
                    <div className="col-md-12" style={{"margin-top":"100px"}}><BookingEquipments/></div>
                </div>
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
else{
    return(
    <div>Please select a room and come back</div>
    )
}
}
}
function mapStateToProps(state){
    return{
        layouts:state.layouts,
        equipments:state.equipments,
        room:state.endUsers.room,
        fetchLayout: state.endUsers.fetchLayout
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchLayouts:fetchLayouts,
        fetchEquipments:fetchEquipments,
        selectLayout:selectLayout,
        fetchLayout:fetchLayout
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(RoomSetup);
