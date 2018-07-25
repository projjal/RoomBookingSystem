import React, {Component} from 'react';
import {fetchLayouts} from '../admin/layouts/layoutAction';
import {fetchEquipments} from '../admin/equipments/equipmentsAction';
import {selectLayout} from './endUserAction.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import BookingEquipments from './bookingEquipment.js';

/*This component uses redux to fetch equipments. This may replace the BookingEquipments component in this file*/
class EquipmentList extends Component{
  render(){
    return(
      <div>
        <h5>Equipments Biatches</h5>
      </div>
    )
  }
}

class LayoutList extends Component{
  render(){
    return(
      <div className="col-md-4">
          <h4>{this.props.data.name}</h4>
          <img height="100px" width="150px" src={this.props.data.image}/>
          <button className="btn btn-primary" style={{"padding":"15px 32px"}} onClick={evt=>this.props.selectLayout(this.props.data)}>Select</button>
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
      if(JSON.stringify(this.props.layouts) !== JSON.stringify({})){
          console.log('user tab layouts');
          if(this.props.layouts.layouts.length>0){
              var arr = Object.keys(this.props.layouts.layouts[0]);
              console.log(arr);
              return(
              <div>
                <h2>Room Setup</h2>
                  <div style={{"display":"block"}}>
                    <h3>Layouts</h3>
                    {this.props.layouts.layouts.map((layouts, i)=><LayoutList data={layouts} key={i} selectLayout={(data)=>this.props.selectLayout(data)}/>)}
                  </div>
                  <div style={{"display":"inline-flex", "padding":"100px"}}>
                    <div><h3>Equipments</h3></div>
                    <div className="col-md-12"><BookingEquipments/></div>
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
}
function mapStateToProps(state){
    return{
        layouts:state.layouts,
        equipments:state.equipments
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchLayouts:fetchLayouts,
        fetchEquipments:fetchEquipments,
        selectLayout:selectLayout
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(RoomSetup);
