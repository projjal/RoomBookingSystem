import React, {Component} from 'react';
import axios from 'axios';


class BookingEquipments extends Component{

	constructor(props)
	{
		super(props)
		this.state={
			equipList:[],
			tprice:0,
			equipform:{},
			check:{}
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
		
       var updatedState={};
       updatedState[equip.name]={
       		"equipmentName":equip.name,
			"pricePerUnit":equip.price,
			"quantity":1,
			
			"id":0,
			"totalPrice":0
		}

       var prev=this.state.equipform;
       var obj2=Object.assign(prev,updatedState);
       this.setState({equiform:obj2});

      
       var updatedState={};
       updatedState[equip.name]={
       		"checked": false
		}

       var prev=this.state.check;
       var obj2=Object.assign(prev,updatedState);
       this.setState({check:obj2});


	}


	funcrender(equip,key)
	{
		
		if(!equip.multiunits)
		{
		return(
			<tr key={key}>
			<td><input name={equip.name} type="checkbox" onChange={this.handleChange}/></td>
			<td>{equip.name}</td>
			<td>{equip.quantity} Units</td>
			<td>{equip.price} per booking</td>
			
			</tr>
			);}
		else
		{
			return(
			<tr key={key}>
			<td><input name={equip.name} type="checkbox" onChange={this.handleChange}/></td>
			<td>{equip.name}</td>
			<td><input name={equip.name} type="number" 
			defaultValue="1" min="1" onChange={this.handleChange1}/> people</td>
			<td>{equip.price} per person</td>
			
			</tr>
			);}
		}



		handleChange(event)
		{
			var prev=this.state.check;
			prev[event.target.name]["checked"]=event.target.checked;
			this.setState({check:prev});
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
			var check=this.state.check;
			var fform=[];
			var x;
			 var price1=0;
			for(x in equiform)
			{
				if(check[x].checked)
				{
					price1+=equiform[x].quantity * equiform[x].pricePerUnit;
					equiform[x].totalPrice=equiform[x].quantity * equiform[x].pricePerUnit;
					fform.push(equiform[x]);
				}
			}
			//this.props.addEquipData(fform);
			//this.props.setEquipPrice(price1);

		}
	


	render()
	{


		return(

			<div>

			

			<form onSubmit={this.submit} className="forms1">
			<table className=" col-md-12">
			

			<tbody>

			{this.state.equipList.map((equip,key)=>
			 this.funcrender(equip,key))}

			</tbody>
			</table>

			<input className="btn btn-primary button" type="submit" value="Save"/>

			</form>
			</div>

			);

	}


}

export default BookingEquipments