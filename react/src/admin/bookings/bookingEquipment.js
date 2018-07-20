import React, {Component} from 'react';
import axios from 'axios';


class BookingEquipments extends Component{

	constructor(props)
	{
		super(props)
		this.state={
			equipList:[],
			tprice:0,
			equipform:{}
		}

		
		this.func1=this.func1.bind(this);
		this.func2=this.func2.bind(this);
		this.funcrender=this.funcrender.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleChange1=this.handleChange1.bind(this);
		this.submit=this.submit.bind(this);


		axios.get('/api/equipments/',{ 'headers': {} })
   .then(res => {this.func1(res.data);
   	this.state.equipList.map((equip)=>this.func2(equip));
   	});



	}

	func1(res)
	{
		this.setState({equipList:res});
	}

	func2(equip)
	{
		console.log("hii");
       var updatedState={};
       updatedState[equip.name]={
       		"name":equip.name,
			"price":equip.price,
			"quantity":1,
			"checked":false
		}

       var prev=this.state.equipform;
       var obj2=Object.assign(prev,updatedState);
       this.setState({equiform:obj2});

	}


	funcrender(equip,key)
	{
		
		if(!equip.multiunits)
		{
		return(
			<tr key={key}>
			<td>{equip.name}</td>
			<td>{equip.quantity}</td>
			<td>{equip.price}</td>
			<td><input name={equip.name} type="checkbox" onChange={this.handleChange}/></td>
			</tr>
			);}
		else
		{
			return(
			<tr key={key}>
			<td>{equip.name}</td>
			<td><input name={equip.name} type="number" 
			defaultValue="1" min="1" onChange={this.handleChange1}/></td>
			<td>{equip.price}</td>
			<td><input name={equip.name} type="checkbox" onChange={this.handleChange}/></td>
			</tr>
			);}
		}



		handleChange(event)
		{
			var prev=this.state.equipform;
			prev[event.target.name]["checked"]=event.target.checked;
			this.setState({equipform:prev});
		}

		handleChange1(event)
		{
			var prev=this.state.equipform;
			prev[event.target.name]["quantity"]=event.target.value;
			this.setState({equipform:prev});
		}

	

		submit(e)
		{
			e.preventDefault();
			var equiform=this.state.equipform;
			var fform=[];
			var x;
			 var price1=0;
			for(x in equiform)
			{
				if(equiform[x].checked)
				{
					price1+=equiform[x].quantity * equiform[x].price;
					fform.push(equiform[x]);
				}
			}
			this.props.addEquipData(fform);
			this.props.setEquipPrice(price1);

		}
	


	render()
	{


		return(

			<div>

			{console.log(this.state.equipList)}
			{console.log(this.state.equipform)}

			<form onSubmit={this.submit}>
			<table className="table-bordered col-md-12">
			<thead>

			<tr>
			<td>Title</td>
			<td>Unit(s)</td>
			<td>Price</td>
			<td></td>
			</tr>
			</thead>

			<tbody>

			{this.state.equipList.map((equip,key)=>
			 this.funcrender(equip,key))}

			</tbody>
			</table>

			<input type="submit" value="Save"/>

			</form>
			</div>

			);

	}


}

export default BookingEquipments