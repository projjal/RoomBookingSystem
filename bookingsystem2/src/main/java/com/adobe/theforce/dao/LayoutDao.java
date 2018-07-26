package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Layout;

/**
 * 
 * DAO interface corresponding to layout entity
 *
 */
public interface LayoutDao {
	List<Layout> getLayouts() throws Exception;
	Layout getLayout(int id) throws Exception;
	void addLayout(Layout layout) throws Exception;
	void deleteLayout(int id) throws Exception;
	void updateLayout(Layout layout) throws Exception;

}
