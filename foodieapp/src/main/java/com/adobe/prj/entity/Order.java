package com.adobe.prj.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="orders")
public class Order {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int orderid;
	
	private double total;
	
	@Column(name="order_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date orderedDate;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="customer_id")
	private Customer customer;
	
	@OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="order_id")
	private List<LineItem> items = new ArrayList<LineItem>();

	public Order() {
	}

	public Order(int orderid, double total, Date orderedDate, Customer customer, List<LineItem> items) {
		this.orderid = orderid;
		this.total = total;
		this.orderedDate = orderedDate;
		this.customer = customer;
		this.items = items;
	}

	/**
	 * @return the orderid
	 */
	public int getOrderid() {
		return orderid;
	}

	/**
	 * @param orderid the orderid to set
	 */
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	/**
	 * @return the total
	 */
	public double getTotal() {
		return total;
	}

	/**
	 * @param total the total to set
	 */
	public void setTotal(double total) {
		this.total = total;
	}

	/**
	 * @return the orderedDate
	 */
	public Date getOrderedDate() {
		return orderedDate;
	}

	/**
	 * @param orderedDate the orderedDate to set
	 */
	public void setOrderedDate(Date orderedDate) {
		this.orderedDate = orderedDate;
	}

	/**
	 * @return the customer
	 */
	public Customer getCustomer() {
		return customer;
	}

	/**
	 * @param customer the customer to set
	 */
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	/**
	 * @return the items
	 */
	public List<LineItem> getItems() {
		return items;
	}

	/**
	 * @param items the items to set
	 */
	public void setItems(List<LineItem> items) {
		this.items = items;
	}
	
	
	
}
