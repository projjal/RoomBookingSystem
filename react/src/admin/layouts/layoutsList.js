import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchLayouts} from '../layouts/layoutAction';
import TableView from '../../utils/index.js';

class LayoutsList extends Component{
    constructor(props){
        super(props);
        this.props.fetchLayouts();
    }
    render(){
        if(JSON.stringify(this.props.layouts)===JSON.stringify({})){
            return (
                <div>Loading....</div>
            );

        }
        return(
            <div>
                List fetched!
                {console.log('layouts',this.props.layouts.layouts.length)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        layouts:state.layouts
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchLayouts:fetchLayouts,
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(LayoutsList);
