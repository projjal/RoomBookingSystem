package com.adobe.theforce.util;

import java.util.ArrayList;
import java.util.List;

import com.adobe.theforce.entity.EquipmentLineItem;
import com.adobe.theforce.entity.Room;

public class RoomLayout {
	private Room room;
	private List<Integer> layoutId = new ArrayList<Integer>();
	/**
	 * @param r
	 * @param layoutId
	 */
	public RoomLayout(Room room, List<Integer> layoutId) {
		this.room = room;
		this.layoutId = layoutId;
	}
	/**
	 * 
	 */
	public RoomLayout() {
	}
	/**
	 * @return the r
	 */
	public Room getRoom() {
		return room;
	}
	/**
	 * @param r the r to set
	 */
	public void setRoom(Room room) {
		this.room = room;
	}
	/**
	 * @return the layoutId
	 */
	public List<Integer> getLayoutId() {
		return layoutId;
	}
	/**
	 * @param layoutId the layoutId to set
	 */
	public void setLayoutId(List<Integer> layoutId) {
		this.layoutId = layoutId;
	}
	
	
	
}
