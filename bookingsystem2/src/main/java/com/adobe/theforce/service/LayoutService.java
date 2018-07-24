package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.LayoutDao;
import com.adobe.theforce.entity.Layout;

@Service
public class LayoutService {
	@Autowired
	private LayoutDao layoutDao;
	
	public List<Layout> getLayouts() throws Exception{
		try {
		return layoutDao.getLayouts();
		} catch (Exception e){
			throw e;
		}
	}

	public Layout getLayout(int id) throws Exception{
		try{
		return layoutDao.getLayout(id);
		} catch (Exception e){
			throw e;
		}
	}

	@Transactional
	public void addLayout(Layout layout) throws Exception{
		try{
		layoutDao.addLayout(layout);
		} catch (Exception e){
			throw e;
		}
	}

	@Transactional
	public void deleteLayout(int id) throws Exception{
		try{
		layoutDao.deleteLayout(id);
		} catch (Exception e){
			throw e;
		}
	}
	
	@Transactional
	public void updateLayout(Layout layout) throws Exception{
		try{
		layoutDao.updateLayout(layout);
		} catch (Exception e){
			throw e;
		}
	}

}
