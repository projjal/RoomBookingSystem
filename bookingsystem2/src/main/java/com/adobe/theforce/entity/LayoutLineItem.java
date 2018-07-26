package com.adobe.theforce.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


import com.fasterxml.jackson.annotation.JsonIgnore;



/**
 * 
 * @author lohumi
 * This entity stores the mapping between room entity and the layout entity.
 * It tells which layouts are available in a room.
 *
 */
@Entity
@Table(name = "layout_line_items")
public class LayoutLineItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="lid")
	private Layout layout;

	/**
	 * 
	 */
	public LayoutLineItem() {
	}

	/**
	 * @param id
	 * @param layout
	 */
	public LayoutLineItem(int id, Layout layout) {
		this.id = id;
		this.layout = layout;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the layout
	 */
	public Layout getLayout() {
		return layout;
	}

	/**
	 * @param layout the layout to set
	 */
	public void setLayout(Layout layout) {
		this.layout = layout;
	}

	
	
	
	
	
	
	
	

}
