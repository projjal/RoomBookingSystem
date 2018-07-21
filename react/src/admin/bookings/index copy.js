import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DateAndRoom from './dateAndRoom';






class App extends Component{

render()
{
	return(
		<div>
		  <DateAndRoom />
		  </div>


		);
}
}

ReactDOM.render(<App/>, document.querySelector(".container"));