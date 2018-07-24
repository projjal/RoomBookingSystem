import React, {Component} from 'react';
import axios from 'axios';
import FoodList from './foodList.js';
// import {FoodPanel} from './FoodPanel';
export default class AdminFoods extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              {/* <FoodPanel/> */}
              <FoodList/>
            </div>
        );
    }

}
