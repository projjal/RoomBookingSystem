import React, {Component} from 'react';
import axios from 'axios';
import {selectFoods} from './endUserAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class BookingFood extends Component{

	constructor(props)
	{
		super(props)
		this.state={
			foodList:[],
			tprice:0,
			foodform:{},
			check:{}
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
	//console.log("hii");
       var updatedState={};
       updatedState[food.name]={
       		"food":food,
			"id":0,
			"quantity":1,
			"totalPrice":0
		}
		  var prev=this.state.foodform;
       var obj2=Object.assign(prev,updatedState);
       this.setState({foodform:obj2});

          var updatedState={};
       updatedState[food.name]={
			"checked":false,
		}
		  var prev=this.state.check;
       var obj2=Object.assign(prev,updatedState);
       this.setState({check:obj2});

	}



		funcrender(food,key)
	{
		
		
		return(
			<tr key={key}>
			<td><input name={food.name} type="checkbox" onChange={this.handleChange}/></td>
			<td>{food.name}</td>
			<td><input name={food.name} type="number" 
			defaultValue="1" min="1" onChange={this.handleChange1}/></td>
			<td>{food.price}</td>
			
			</tr>
			);
		}



		handleChange(event)
		{
			var prev=this.state.check;
			prev[event.target.name]["checked"]=event.target.checked;
			this.setState({check:prev});
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
			var check=this.state.check;
			var fform=[];
			var x;
			 var price1=0;
			for(x in fooform)
			{
				if(check[x].checked)
				{
					price1+=fooform[x].quantity * fooform[x].food.price;
					fooform[x].price=fooform[x].quantity * fooform[x].food.price;
					fform.push(fooform[x]);
				}
			}
			this.props.selectFoods(fform);
			

		}



render(){

	return(

		<div>


			<form onSubmit={this.submit} className="forms">
			<table className=" col-md-12">
		

			<tbody>

			{this.state.foodList.map((food,key)=>
			 this.funcrender(food,key))}

			</tbody>
			</table>

			<input  className="btn btn-primary button" type="submit" value="Save"/>

			</form>

			</div>


		);

}




}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        selectFoods:selectFoods
    },dispatch);
}

export default connect(null,mapPropsToDispatch)(BookingFood);