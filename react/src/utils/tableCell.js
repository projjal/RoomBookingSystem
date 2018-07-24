import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {deleteRoom} from '../admin/rooms/roomsAction';
import {deleteLayout} from '../admin/layouts/layoutAction';
import {deleteFood} from '../admin/food/foodsAction';
import {deleteEquipment} from '../admin/equipments/equipmentsAction';
class TableCell extends Component{
    deleteEntity=(entity, record)=>{
      switch(entity){
        case "rooms":{ 
          //console.log(record);
          this.props.deleteRoom(record);
          break;
        }
        case "layouts":{ 
            this.props.deleteLayout(record);
            break;
        }
        case "foods":{ 
            this.props.deleteFood(record);
            break;
        }
        case "equipments":{
            this.props.deleteEquipment(record);
            break;

        }
      }
    }
    render(){
      if(this.props.type==="image")
        return(<td><img src={this.props.data}/></td>);
      if(this.props.type==="button")
        return(<td><button className="btn btn-primary" onClick={evt=>this.deleteEntity(this.props.entity,this.props.record)}>Delete</button> </td>);
      return (  
        <td>{this.props.data}</td>
      )
    }
}
  

function mapDispatchToProps(dispatch){
    return bindActionCreators({
      deleteLayout:deleteLayout,
      deleteRoom:deleteRoom,
      deleteEquipment:deleteEquipment,
      deleteFood:deleteFood
    },dispatch);
  }
export default connect(null, mapDispatchToProps)(TableCell);