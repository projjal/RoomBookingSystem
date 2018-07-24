import React, { Component } from 'react';
import TableCell from './tableCell';
class TableHeading extends Component{
  render(){
    return (
      <thead>
        {this.props.data.map((ply, i) => <th key={i}>{ply}</th>)}
      </thead>
    )
  }
}

/* class TableCell extends Component{
  deleteEntity=(entity, record)=>{
    switch(entity){
      case "rooms":{ 
        //console.log(record);
        this.props.deleteRoom(record);
        break;
      }
      case "layouts":{ this.props.deleteLayout(record);
        break;
      }
    }
  }
  render(){
    if(this.props.type==="image")
      return(<td><img src={this.props.data}/></td>);
    if(this.props.type==="button")
      return(<td><button className="btn btn-primary" onClick={evt=>this.deleteEntity(this.props.entity,this.props.record)}>Delete</button> </td>);
    return (  
      <td>{this.props.data}</td>
    )
  }
}
 */
class TableRow extends Component{
  render(){
    return (
          <tr>
              {this.props.keys.map((index, i) => <TableCell key={i} data={this.props.data[index]} type={index} entity={this.props.entity} record={this.props.data} />)}
              {console.log(this.props.data)}
              {console.log(this.props.keys)}
          </tr>
    )
  }
}

class TableBody extends Component{
  render(){
    return(
      <tbody>
            {this.props.data.map((ply, i) => <TableRow data={ply} key={i} keys={this.props.keys} entity={this.props.entity}/>)}
      </tbody>
    )
  }
}

class TableView extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <table className="table table-bordered table-striped">
      <TableHeading data={this.props.heading}/>
      <TableBody data={this.props.data} keys={this.props.heading} entity={this.props.entity}/>
      </table>
      </div>

    )
  }
}

export default TableView;
