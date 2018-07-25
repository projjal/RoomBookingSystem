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

	<div>

		<h5>PERSONAL DETAILS</h5>

		
		<div className="col-md-12">

			<div className="col-md-4">

				<div><label>Title</label></div>
				<div><select name="title" onChange={this.handleChange}>
					<option value="select">Select</option>
					<option value="Mr.">Mr.</option>
					<option value="Mrs.">Mrs.</option>
					</select></div>

			</div>

			<div className="col-md-4">

				<div><label>Name</label></div>
				<div><input type="text" name="name" required onChange={this.handleChange}/></div>

			</div>

			<div className="col-md-4">

				<div><label>Email</label></div>
				<div><input type="text" name="email"  required onChange={this.handleChange}/></div>

			</div>


		</div>


		<div className="col-md-12">

			<div className="col-md-4">

				<div><label>Phone</label></div>
				<div><input type="number" name="phone"  required onChange={this.handleChange}/></div>

			</div>

			<div className="col-md-8">

				<div><label>Notes</label></div>
				<div><textarea type="text" name="notes"  required onChange={this.handleChange}/></div>

			</div>

		
		</div>



	<h5>BILLING ADDRESS</h5>


		<div className="col-md-12">

			<div className="col-md-4">

				<div><label>Company</label></div>
				<div><input type="text" name="company"  required onChange={this.handleChange}/></div>

			</div>

			<div className="col-md-4">

				<div><label>Address</label></div>
				<div><input type="text" name="address" required onChange={this.handleChange}/></div>

			</div>

			<div className="col-md-4">

				<div><label>City</label></div>
				<div><input type="text" name="city"  required onChange={this.handleChange}/></div>

			</div>


		</div>



		<div className="col-md-12">

			<div className="col-md-4">

				<div><label>State</label></div>
				<div><input type="text" name="state"  required onChange={this.handleChange}/></div>

			</div>

			<div className="col-md-4">

				<div><label>zip</label></div>
				<div><input type="number" name="zip" required onChange={this.handleChange}/></div>

			</div>

			<div className="col-md-4">

				<div><label>Country</label></div>
				<div><select name="country" onChange={this.handleChange}>
					<option value="select">select</option>
					<option value="India">India</option>
					</select></div>

			</div>


		</div>

	<h5>PAYMENT METHOD</h5>



		<div className="col-md-4">

				<div><label>Payment Method</label></div>
				<div><select name="payment" onChange={this.handleChange}>
					<option value="select">select</option>
					<option value="Cash">Cash</option>
					</select></div>

			</div>





	</div>
	

	




		);
}


}

export default BookingClientDetails;

