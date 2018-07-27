  import React, {Component} from 'react';
  import {Tabs, Tab} from 'react-bootstrap';
  import MeetingRooms from './meetingRooms.js';
  import RoomSetup from './roomSetup.js';
  import BookingFood from './bookingFood';
  import BookingEquipments from './bookingEquipment';
  import BookingClientDetails from './bookingClient';
  import BookRoom from './bookRoom.js';
  import Confirmation from './confirmation.js';

  class UserMainTab extends Component{

    render(){

      return(
        <div className='col-md-9'>
        <Tabs className='tab' defaultActiveKey={1} id="1">

        <Tab eventKey={1} title="Step-1 Meeting Rooms">
        <MeetingRooms />
        </Tab>

        <Tab eventKey={2} title="Step-2 Book Room">
        <h3>Book Room</h3>
        <BookRoom/>
        </Tab>

        <Tab eventKey={3} title="Step-3 Room Setup">
        <h3>Room Setup</h3>
        <RoomSetup/>
        </Tab>

        <Tab eventKey={4} title="Step-4 Food and Drinks">
        <h3>Foods and Drinks</h3>
        <BookingFood/>
        </Tab>

        <Tab eventKey={5} title="Step-5 Checkout">
        <BookingClientDetails/>
        </Tab>

        <Tab eventKey={6} title="Step-6 Confirmation">
        <Confirmation/>
        </Tab>

        </Tabs>
        </div>
      );
    }
  }


  export default UserMainTab;
