import React, { Component } from 'react';

class TableHeading extends Component{
  render(){
    return (
      <thead>
        {this.props.data.map((ply, i) => <th key={i}>{ply}</th>)}
      </thead>
    )
  }
}

class TableCell extends Component{
  render(){
    return (
      <td>{this.props.data}</td>
    )
  }
}

class TableRow extends Component{
  render(){
    return (
          <tr>
              {this.props.keys.map((index, i) => <TableCell key={i} data={this.props.data[index]}/>)}
              {console.log("yoohoo")}
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
            {this.props.data.map((ply, i) => <TableRow data={ply} key={i} keys={this.props.keys}/>)}
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
      <TableBody data={this.props.data} keys={this.props.heading}/>
      </table>
      </div>

    )
  }
}

export default TableView;


// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       headings:["ID", "NAME", "SALARY"],
//       players:[
//       {id:101, "name":'sachin', 'salary':1000},
//       {id:102, "name":'saurav', 'salary':2000},
//       {id:103, "name":'rahul', 'salary':1500},
//       {id:104, "name":'sehwag', 'salary':3000},
//       {id:105, "name":'virat', 'salary':8000}
//     ]
//     }
//   }
//   render(){
//     return(
//       <div>
//       <TableView heading={this.state.headings} data={this.state.players}/>
//       </div>
//     );
//   }
// }
//
// export default App;
