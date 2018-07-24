import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchEquipments, deleteEquipment} from './equipmentsAction';
import TableView from '../../utils/index.js';
class EquipmentList extends Component{
    constructor(props){
        super(props);
        this.props.fetchEquipments();
    }
    render(){
        if(JSON.stringify(this.props.equipments) !== JSON.stringify({})){
          console.log("Yahoo");
          console.log('equipments',this.props.equipments.equipments.length);
          if(this.props.equipments.equipments.length>0){
            var arr = Object.keys(this.props.equipments.equipments[0]);
            console.log(arr);
            return(
              <div>
              <TableView heading={arr} data={this.props.equipments.equipments}/>
              </div>
            )
          }
          else{
           // console.log('equipments',this.props.equipments);
            return(
                <div>Loading...</div>
            );
          }  
          
        }
        else{
            //console.log('equipments',this.props.equipments);
            return(
                <div>Loading...</div>
            );
        }
    }

}
function mapStateToProps(state){
    return{
        equipments:state.equipments
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchEquipments:fetchEquipments,
        deleteEquipment:deleteEquipment
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(EquipmentList);
