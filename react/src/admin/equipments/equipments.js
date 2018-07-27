    import React, {Component} from 'react';
    import axios from 'axios';
    import EquipmentList from './equipmentList.js';
    import {EquipmentPanel} from './EquipmentPanel'
    export default class AdminEquipments extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div>
                <EquipmentPanel/>
                <EquipmentList/>
                </div>
            );
        }

    }
