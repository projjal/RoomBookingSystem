
import React, {Component} from 'react';

export default function(equip,key)
	{
		
		if(!equip.multiunits)
		{
		return(
			<tr key={key}>
			<td>{equip.name}</td>
			<td>{equip.quantity}</td>
			<td>{equip.price}</td>
			<td><input name={equip.name} type="checkbox" onChange={this.handleChange}/></td>
			</tr>
			);}
		else
		{
			return(
			<tr key={key}>
			<td>{equip.name}</td>
			<td><input name={equip.name+"quantity"} type="number" 
			defaultValue="1" onChange={this.handleChange1}/></td>
			<td>{equip.price}</td>
			<td><input name={equip.name} type="checkbox" onChange={this.handleChange}/></td>
			</tr>
			);}
		}