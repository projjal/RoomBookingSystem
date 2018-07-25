import React, { Component } from 'react';
import TableCell from './tableCell';

class TableHeading extends Component{
  constructor(props){
    super(props);
    this.state={
      headings:{
        "id":"ID",
        "emailID":"Email Address",
        "mobileNumber":"Mobile",
        "address":"Address",
        "button":"Action",
        "image":"Image",
        "type":"Name",
        "capacity":"Capacity",
        "description":"Description",
        "name":"Name",
        "price":"Price",
        "quantity":"Quantity",
        "multiunits":"Multi Units"
      }
    }
  }
  render(){
    return (
      <thead>
        {this.props.data.map((ply, i) => <th key={i}>{(this.state.headings[ply])?this.state.headings[ply]:ply}</th>)}
      </thead>
    )
  }
}

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
