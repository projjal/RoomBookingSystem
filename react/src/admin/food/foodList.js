import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchFoods, deleteFood} from './foodsAction';
import TableView from '../../utils/index.js';
class FoodList extends Component{
    constructor(props){
        super(props);
        this.props.fetchFoods();
    }
    render(){
        if(JSON.stringify(this.props.foods) !== JSON.stringify({})){
          console.log("Yahoo");
          console.log('foods',this.props.foods.foods.length);
          var arr = Object.keys(this.props.foods.foods[0]);
          console.log(arr);
            return(
              <div>
              <TableView heading={arr} data={this.props.foods.foods}/>
              </div>
            )
        }
        else{
            console.log('foods',this.props.foods);
            return(
                <div>Loading...</div>
            );
        }
    }

}
function mapStateToProps(state){
    return{
        foods:state.foods
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchFoods:fetchFoods,
        deleteFood:deleteFood
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(FoodList);