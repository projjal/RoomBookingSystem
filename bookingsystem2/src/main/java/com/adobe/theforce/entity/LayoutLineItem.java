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

@Entity
@Table(name = "layout_line_items")
public class LayoutLineItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="lid")
	private Layout layout;

	
	//@ManyToOne(fetch = FetchType.LAZY)
	@ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
	
	

	/**
	 * 
	 */
	public LayoutLineItem() {
	}

	/**
	 * @param id
	 * @param layout
	 * @param room
	 */
	public LayoutLineItem(int id, Layout layout, Room room) {
		this.id = id;
		this.layout = layout;
		this.room = room;
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

	/**
	 * @return the room
	 */
	public Room getRoom() {
		return room;
	}

	/**
	 * @param room the room to set
	 */
	public void setRoom(Room room) {
		this.room = room;
	}
	
	
	
	

}
