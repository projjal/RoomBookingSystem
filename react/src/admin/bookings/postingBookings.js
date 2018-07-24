import React, {Component} from 'react';
import axios from 'axios';



export default function(dateroom, equip, food, prices, client )
{

//console.log("Hello world!!!");

  
 

 	//console.log("Hello world!!!");

		//console.log(dateroom.date);
			
var dt=dateroom.date;
		var y=parseInt(dt.slice(0,5));
		var m=parseInt(dt.slice(5,7));
		var d=parseInt(dt.slice(7,9));
		var dat=new Date(y,m,d);

	

	var finalobj={};
	finalobj["bookedForDate"]=dat.getTime();
	finalobj["bookingDate"]=(new Date()).getTime();
	client["id"]=0;
	finalobj["client"]=client;
	finalobj["duration"]=2;
	finalobj["equipmentItems"]=equip;
	finalobj["foodItems"]=food;
	finalobj["id"]=0;
	finalobj["layoutName"]=dateroom["layout"];
	finalobj["paymentMethod"]=dateroom["payment"];
	finalobj["roomType"]=dateroom["room"];
	finalobj["status"]=dateroom["status"];
	finalobj["total"]=prices["total"];

	console.log(finalobj);



	

	axios.post('/api/bookings', finalobj).then((response)=>{
		console.log(response);
	})




}