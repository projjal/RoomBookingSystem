package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Layout;

public interface LayoutDao {
	List<Layout> getLayouts();
	Layout getLayout(int id);
	void addLayout(Layout layout);
	void deleteLayout(int id);
	void updateLayout(Layout layout);

}
