package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adobe.theforce.dao.LayoutDao;
import com.adobe.theforce.entity.Layout;

@Service
public class LayoutService {
	
	@Autowired
	private LayoutDao layoutDao;
	
	public List<Layout> getLayouts() {
		return layoutDao.getLayouts();
	}

	public Layout getLayout(int id) {
		return layoutDao.getLayout(id);
	}

	public void addLayout(Layout layout) {
		layoutDao.addLayout(layout);
	}

	public void deleteLayout(int id) {
		layoutDao.deleteLayout(id);
	}

	public void updateLayout(Layout layout) {
		layoutDao.updateLayout(layout);
	}

}
