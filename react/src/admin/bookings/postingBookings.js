	import React, {Component} from 'react';
	import axios from 'axios';



	export default function(dateroom, equip, food, prices, client, somefunc)
	{

	//console.log("Hello world!!!");

	
	

		//console.log("Hello world!!!");

			console.log(dateroom.date);
				
		var dt=dateroom.date;
			var y=parseInt(dt.slice(0,4));
			var m=parseInt(dt.slice(5,7));
			var d=parseInt(dt.slice(8,10));
			//console.log(y,m,d);
			var dat=new Date(y,m-1,d);

		console.log(dateroom["tofrom"]);

		var finalobj={};

		finalobj["bookedForDate"]=dat.getTime();
		finalobj["bookingDate"]=(new Date()).getTime();
		client["id"]=0;
		finalobj["client"]=client;
		finalobj["duration"]=dateroom["tofrom"];
		finalobj["equipmentItems"]=equip;
		finalobj["foodItems"]=food;
		finalobj["id"]=0;
		finalobj["layout"]=dateroom["layout"];
		finalobj["paymentMethod"]=dateroom["payment"];
		finalobj["room"]=dateroom["room"];
		finalobj["status"]=dateroom["status"];
		finalobj["total"]=prices["total"];

		//console.log(finalobj);

	//console.log("finalobj:",finalobj);


	// axios.post("/api/bookings", finalobj)
	// .then((res)=>{console.log(res)});


		

		return finalobj;




	}