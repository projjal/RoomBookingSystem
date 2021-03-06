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

			
			this.setEquipList=this.setEquipList.bind(this);
			this.settingStates=this.settingStates.bind(this);
			this.funcrender=this.funcrender.bind(this);
			this.handleChange=this.handleChange.bind(this);
			this.handleChange1=this.handleChange1.bind(this);
			this.submit=this.submit.bind(this);


			axios.get('/api/equipments/',{ 'headers': {} })
			.then(res => {this.setEquipList(res.data);
			this.state.equipList.map((equip)=>this.settingStates(equip));
			});

		}

		setEquipList(res)
		{
			this.setState({equipList:res});
		}

		settingStates(equip)
		{
			
			var updatedState={};
			updatedState[equip.name]={
			
				"equipment":equip,
				"quantity":1,
				"id":0,
				"price":0
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
				<td>{equip.name}</td>
				<td>1</td>
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
				defaultValue="1"  min="1" onChange={this.handleChange1}/></td>
				<td>{equip.price}</td>
				<td><input name={equip.name} type="checkbox" onChange={this.handleChange}/></td>
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
						price1+=equiform[x].quantity * equiform[x].equipment.price;
						equiform[x].price=equiform[x].quantity * equiform[x].equipment.price;
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

				

				<form onSubmit={this.submit} className="forms1">
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

				<input className="btn btn-primary button" type="submit" value="Save"/>

				</form>
				</div>

				);

		}


	}

	export default BookingEquipments