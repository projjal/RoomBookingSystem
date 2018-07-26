import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchUsers, deleteUser} from './usersAction';
import TableView from '../../utils';
class UserList extends Component{
    constructor(props){
        super(props);
        this.props.fetchUsers();
    }
    render(){
        if(JSON.stringify(this.props.users) !== JSON.stringify({})){
          console.log('users',this.props.users.users.length);
          if(this.props.users.users.length>0){
            var arr = Object.keys(this.props.users.users[0]);
            arr.push("button");
            return(
              <div>
              <TableView heading={arr} data={this.props.users.users} entity="users"/>
              </div>
            )
          }
          else{
            return(
                <div>No user record present.</div>
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
        users:state.users
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchUsers:fetchUsers,
        deleteUser:deleteUser
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(UserList);
