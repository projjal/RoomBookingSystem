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
            else if(this.props.layouts.layouts.length<=0){
                return (
                    <div>No layout present</div>
                );
            }
            else{
                var arr = Object.keys(this.props.layouts.layouts[0]);
                console.log(arr);
                arr.push("button");
                var arr1=["id","type","capacity","image"];
                return(
                    <div>
                        {console.log('layouts',this.props.layouts.layouts.length)}
                        <TableView heading={arr} data={this.props.layouts.layouts} entity="layouts"/>
                    </div>
            );
            }
            
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
