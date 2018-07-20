import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class AddRoom extends Component{
    render(){
        return(
            <div>
                <form >
                    First name: <input type="string" name="fname"/><br/>
                    Last name: <input type="string" name="lname"/><br/>
                    Phone: <input type="number" name="phone"/><br/>
                </form>
            </div>
        );
    }
}
export default AddRoom;