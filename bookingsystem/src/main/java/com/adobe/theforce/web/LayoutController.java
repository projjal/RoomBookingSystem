package com.adobe.theforce.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Layout;
import com.adobe.theforce.service.LayoutService;

@RestController
public class LayoutController {
	
	@Autowired
	private LayoutService layoutService;
	
	
	@RequestMapping(value = "/api/layouts",method = RequestMethod.GET)
	public @ResponseBody List<Layout> getLayouts(){
		return layoutService.getLayouts();
	}
	
	@RequestMapping(value = "/api/layouts",method = RequestMethod.POST)
	public void addLayout(@RequestBody Layout r){
		layoutService.addLayout(r);
	}
	
	@RequestMapping(value = "/api/layouts/{id}",method = RequestMethod.DELETE)
	public void deleteLayout(@PathVariable("id") int id){
		layoutService.deleteLayout(id);
	}
	
	@RequestMapping(value = "/api/layouts/{id}",method = RequestMethod.PUT)
	public void updateLayout(@PathVariable("id") int id,@RequestBody Layout r){
		layoutService.updateLayout(r);
	}
	
	@RequestMapping(value = "/api/layouts/{id}",method = RequestMethod.GET)
	public @ResponseBody Layout getLayout(@PathVariable("id") int id){
		return layoutService.getLayout(id);
	}


}
