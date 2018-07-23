import React,{Component} from 'react';
import LayoutPanel from './layoutPanel';
import LayoutsList from './layoutsList';
class AdminLayout extends Component{
    render(){
        return(
            <div>
                <LayoutPanel/>
                <LayoutsList/>
            </div>
        );
    }
}
export default AdminLayout;