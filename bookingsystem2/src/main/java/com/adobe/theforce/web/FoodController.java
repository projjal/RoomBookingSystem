/**
 * 
 */
package com.adobe.theforce.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.dao.DaoException;
import com.adobe.theforce.entity.ExceptionJSONInfo;
import com.adobe.theforce.entity.Food;
import com.adobe.theforce.service.AdministratorService;

/**
 * @author pchanda
 *
 */
@RestController
public class FoodController {
	@Autowired
	private AdministratorService foodService;
	
	
	@RequestMapping(value = "/api/foods",method = RequestMethod.GET)
	public @ResponseBody List<Food> getFoods()  throws DaoException{
		try{
		return foodService.getFoods();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Get Foods");
		}
	}
	
	@RequestMapping(value = "/api/foods",method = RequestMethod.POST)
	public int addFood(@RequestBody Food r)  throws DaoException{
		try{
		foodService.addFood(r);
		return r.getId();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Add Food");
		}
	}
	
	@RequestMapping(value = "/api/foods/{id}",method = RequestMethod.DELETE)
	public void deleteFood(@PathVariable("id") int id)  throws DaoException{
		try{
		foodService.deleteFood(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Delete Food");
		}
	}
	
	@RequestMapping(value = "/api/foods/{id}",method = RequestMethod.PUT)
	public void updateFood(@PathVariable("id") int id,@RequestBody Food r)  throws DaoException{
		try{
		foodService.updateFood(r);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Update Food with Id = " + id);
		}
	}
	
	@RequestMapping(value = "/api/foods/{id}",method = RequestMethod.GET)
	public @ResponseBody Food getFood(@PathVariable("id") int id)  throws DaoException {
		try{
		return foodService.getFood(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Food with Id " + id);
		}
	}
	
	@ExceptionHandler(DaoException.class)
	public @ResponseBody ExceptionJSONInfo handleDaoException(HttpServletRequest request, DaoException ex){
		
		ExceptionJSONInfo response = new ExceptionJSONInfo();
		response.setMessage(ex.getMessage());
		
		return response;
	}

}
