import React, {Component} from 'react';
import axios from 'axios';


class BookingFood extends Component{

	constructor(props)
	{
		super(props)
		this.state={
			foodList:[],
			tprice:0,
			foodform:{}
		}
	
		this.func1=this.func1.bind(this);
		this.func2=this.func2.bind(this);
		this.funcrender=this.funcrender.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleChange1=this.handleChange1.bind(this);
		this.submit=this.submit.bind(this);

	axios.get('/api/foods/',{ 'headers': {} })
   .then(res => {this.func1(res.data);
   	this.state.foodList.map((food)=>this.func2(food));
   	});

}



func1(res)
	{
		this.setState({foodList:res});
	}

	func2(food)
	{
		console.log("hii");
       var updatedState={};
       updatedState[food.name]={
       		"name":food.name,
			"price":food.price,
			"quantity":1,
			"checked":false
		}
	}



		funcrender(food,key)
	{
		
		
		return(
			<tr key={key}>
			<td>{food.name}</td>
			<td><input name={food.name} type="number" 
			defaultValue="1" min="1" onChange={this.handleChange1}/></td>
			<td>{food.price}</td>
			<td><input name={food.name} type="checkbox" onChange={this.handleChange}/></td>
			</tr>
			);
		}



		handleChange(event)
		{
			var prev=this.state.foodform;
			prev[event.target.name]["checked"]=event.target.checked;
			this.setState({foodform:prev});
		}

		handleChange1(event)
		{
			var prev=this.state.foodform;
			prev[event.target.name]["quantity"]=event.target.value;
			this.setState({foodform:prev});
		}

	

		submit(e)
		{
			e.preventDefault();
			var fooform=this.state.foodform;
			var fform=[];
			var x;
			 var price1=0;
			for(x in fooform)
			{
				if(fooform[x].checked)
				{
					price1+=fooform[x].quantity * fooform[x].price;
					fform.push(fooform[x]);
				}
			}
			this.props.addFoodData(fform);
			this.props.setFoodPrice(price1);

		}



render(){

	return(

		<div>


			<form onSubmit={this.submit} className="forms">
			<table className="table-bordered col-md-12">
			<thead>

			<tr>
			<td>Title</td>
			<td>People</td>
			<td>Price</td>
			<td></td>
			</tr>
			</thead>

			<tbody>

			{this.state.foodList.map((food,key)=>
			 this.funcrender(food,key))}

			</tbody>
			</table>

			<input type="submit" value="Save"/>

			</form>

			</div>


		);

}




}

export default BookingFood;