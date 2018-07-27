    import React, {Component} from 'react';


    class DateAndTime extends Component{

        constructor(props)
        {
            super(props);

            var today = new Date(),
                date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+
                " "+today.getHours()+":"+today.getMinutes();

            this.state = {
                date: date
            };
        }

        render()
        {
            return(
                <div>
                {this.state.date}  
                </div>  	
                    );
            
        }


        }


        export default DateAndTime;