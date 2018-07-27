	import React, {Component} from 'react';
	import axios from 'axios';
	import {addUserDetails} from './endUserAction';
	import {connect} from 'react-redux';
	import { bindActionCreators } from 'redux';


	class BookingClientDetails extends Component{

		constructor(props)
		{
			super(props)
			this.state={
				clientDetails:{},
				payment:null
			}

			this.handleChange=this.handleChange.bind(this);
			this.submit=this.submit.bind(this);

		}


	handleChange(event)
	{
			if(event.target.name==="payment"){
				this.setState({payment:event.target.value})
			}
			else{
				var prev=this.state.clientDetails;
				prev[event.target.name]=event.target.value;
				this.setState({clientDetails:prev});
			}

	}

	submit(e)
	{
		console.log("hii");
		e.preventDefault();
		this.props.addUserDetails(this.state);
	}


	render(){

		return(
			<div>

			<form onSubmit={this.submit} className="forms">

		<div>

			<h5>PERSONAL DETAILS</h5>


			<div className="col-md-12">

				<div className="col-md-4">

					<div><label>Title</label></div>
					<div><select name="title" required onChange={this.handleChange}>
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
					<div><select name="country" required onChange={this.handleChange}>
						<option value="select">select</option>
						<option value="India">India</option>
						</select></div>

				</div>


			</div>

		<h5>PAYMENT METHOD</h5>



			<div className="col-md-4">

					<div><label>Payment Method</label></div>
					<div><select name="payment" required onChange={this.handleChange}>
						<option value="select">select</option>
						<option value="Cash">Cash</option>
						</select></div>

				</div>

				<div className="col-md-8">
				<br/>
				<br/>
				<br/>
				<br/>
				</div>






		</div>

		<div className="col-md-12">

		<input  className="btn btn-primary button" type="submit" value="Save"/>


		</div>


		</form>
		</div>





			);
	}


	}

	function mapPropsToDispatch(dispatch){
		return bindActionCreators({
			addUserDetails:addUserDetails
		},dispatch);
	}

	export default connect(null,mapPropsToDispatch)(BookingClientDetails);
