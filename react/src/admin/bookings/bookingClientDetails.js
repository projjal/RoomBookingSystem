import React, {Component} from 'react';
import axios from 'axios';


class BookingClientDetails extends Component{

	constructor(props)
	{
		super(props)
		this.state={
			clientDetails:{}
		}

		this.handleChange=this.handleChange.bind(this);
		this.submit=this.submit.bind(this);

	}


  handleChange(event)
  {
  			var prev=this.state.clientDetails;
			prev[event.target.name]=event.target.value;
			this.setState({clientDetails:prev});
  }

  submit(e)
  {
  	e.preventDefault();
  	this.props.addClientData(this.state.clientDetails);
  }


render(){

	return(

		<div className="container-fluid">
		<form onSubmit={this.submit} className="forms">
		<table className="col-md-12">
		<tbody>

		<tr>
		<td><label>Title</label></td>
		<td><select name="title" onChange={this.handleChange}>
			<option value="select">Select</option>
			<option value="Mr.">Mr.</option>
			<option value="Mrs.">Mrs.</option>
			</select></td>
		</tr>

		<tr>
		<td><label>Name</label></td>
		<td><input type="text" name="name" required onChange={this.handleChange}/></td>
		</tr>

		<tr>
		<td><label>Email</label></td>
		<td><input type="text" name="email"  required onChange={this.handleChange}/></td>
		</tr>

		<tr>
		<td><label>Phone</label></td>
		<td><input type="number" name="phone"  required onChange={this.handleChange}/></td>
		</tr>

		<tr>
		<td><label>Notes</label></td>
		<td><textarea type="text" name="name"  required onChange={this.handleChange}/></td>
		</tr>

		<tr>
		<td><label>Company</label></td>
		<td><input type="text" name="company"  required onChange={this.handleChange}/></td>
		</tr>

		<tr>
		<td><label>Address</label></td>
		<td><input type="text" name="address"  required onChange={this.handleChange}/></td>
		</tr>

		<tr>
		<td><label>City</label></td>
		<td><input type="text" name="city"  required onChange={this.handleChange}/></td>
		</tr>

	

		<tr>
		<td><label>State</label></td>
		<td><input type="text" name="state"  required onChange={this.handleChange}/></td>
		</tr>

		<tr>
		<td><label>zip</label></td>
		<td><input type="number" name="zip"  required onChange={this.handleChange}/></td>
		</tr>

		<tr>
		<td><label>Country</label></td>
		<td><select name="country" onChange={this.handleChange}>
			<option value="select">select</option>
			<option value="India">India</option>
			</select></td>
		</tr>

		<tr>
		<td></td>
		<td><input type="submit" value="Save and Confirm Booking"/></td>
		</tr>

		</tbody>
		</table>
		</form>

		</div>


		);
}


}

export default BookingClientDetails;

