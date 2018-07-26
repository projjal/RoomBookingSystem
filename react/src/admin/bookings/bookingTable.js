import React, {Component} from 'react';
import AddBooking from './addBooking';
import BookingPanel from './bookingPanel';
import axios from 'axios';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchBookings, deleteBookings} from './bookingAction';


class BookingTable extends Component{


	constructor(props)
	{
		super(props);
		this.state={
			bookings:[]
		}
		this.props.fetchBookings();

		this.func=this.func.bind(this);
		this.deleteBook=this.deleteBook.bind(this);
		this.funcrender=this.funcrender.bind(this);
		this.funcDate=this.funcDate.bind(this);
	

		// axios.get('/api/bookings/',{ 'headers': {} })
  //  .then(res => this.func(res.data));


	}


	func(res)
	{
		this.setState({bookings:res});
	}

	funcDate(d)
	{
		d=parseInt(d);
		var dat=new Date(d);
		var dat1=String(dat.getFullYear())+"-"+(dat.getMonth()+1)+"-"+
						dat.getDate();
		return dat1;
	}




	deleteBook(id)
	{

		this.props.deleteBookings(id);
	}


	funcrender(book,key)
	{
		return(
		<tr key={key}>
		<td></td>
		<td>{this.funcDate(book.bookedForDate)}</td>
		<td>{book.client.name}</td>
		<td>{book.total}</td>
		<td>{book.status}</td>
		<td><input type="button" className="btn btn-warning" name={book.id} value="delete"
									onClick={()=>this.deleteBook(book.id)}/></td>
		</tr>
		);
	}

	render()
	{
		return(


		<table className="table table-bordered col-md-12 table-striped">
		<thead>

		<tr>
		<th>Room </th>
		<th>Date</th>
		<th>Name</th>
		<th>Total</th>
		<th>Status</th>
		<th> </th>
		</tr>
		

		</thead>

		<tbody>

		{this.props.bookings.bookings && this.props.bookings.bookings.map((book,key)=>this.funcrender(book,key))}

		</tbody>

		</table>



		);
	}
}

function mapStateToProps(state){
    return{
        bookings:state.bookings
    }
}
function mapPropsToDispatch(dispatch){
    return bindActionCreators({
        fetchBookings:fetchBookings,
        deleteBookings:deleteBookings,
    },dispatch);
}

export default connect(mapStateToProps,mapPropsToDispatch)(BookingTable);