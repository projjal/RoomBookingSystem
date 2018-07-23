import React, {Component} from 'react';
import axios from 'axios';
import FoodList from './foodList.js';
export default class AdminFoods extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>

              <FoodList/>
            </div>
        );
    }

}
