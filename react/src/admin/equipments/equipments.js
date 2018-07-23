import React, {Component} from 'react';
import axios from 'axios';
import EquipmentList from './equipmentList.js';
export default class AdminEquipments extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              
              <EquipmentList/>
            </div>
        );
    }

}
