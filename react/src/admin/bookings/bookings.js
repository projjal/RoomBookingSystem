import React, {Component} from 'react';
import AddBooking from './addBooking';
import BookingPanel from './bookingPanel';
import axios from 'axios';









class BookingTable extends Component{


	constructor(props)
	{
		super(props);
		this.state={
			bookings:[]
		}


		this.func=this.func.bind(this);
		this.deleteBook=this.deleteBook.bind(this);

		axios.get('/api/bookings/',{ 'headers': {} })
   .then(res => this.func(res.data));


	}


	func(res)
	{
		this.setState({bookings:res});
	}


	deleteBook(id)
	{
		axios.delete('/api/bookings/', id)
		.then(res=>{

			axios.get('/api/bookings/',{ 'headers': {} })
         .then(res1 => this.func(res1.data));

		})
	}


	funcrender(book,key)
	{
		return(
		<tr key={key}>
		<td>{book.roomType}</td>
		<td>{book.bookedForDate}</td>
		<td>{book.client.name}</td>
		<td>{book.total}</td>
		<td>{book.status}</td>
		<td><input type="button" name={book.id} value="delete"
									onClick={()=>this.deleteBook(book.id)}/></td>
		</tr>
		);
	}

	render()
	{
		return(


		<table className="table-bordered col-md-12 booktable">
		<thead>

		<tr>
		<td>Room </td>
		<td>Date</td>
		<td>Name</td>
		<td>Total</td>
		<td>Status</td>
		<td> </td>
		</tr>

		</thead>

		<tbody>

		{this.state.bookings.map((book,key)=>funcrender(book,key))}

		</tbody>

		</table>



		);
	}
}

export default class AdminBookings extends Component{
    render(){
        return(
            <div>

            <BookingPanel/>
            <BookingTable/>

         
            </div>
        );
    }
}