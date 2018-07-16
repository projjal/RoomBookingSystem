package com.adobe.prj.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="items")
public class LineItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int itemid;
	
	@ManyToOne
	@JoinColumn(name="pid")
	private Product product;
	
	private double price;
	
	private int quantity;

	public LineItem() {
	}

	public LineItem(int itemid, Product product, double price, int quantity) {
		this.itemid = itemid;
		this.product = product;
		this.price = price;
		this.quantity = quantity;
	}

	/**
	 * @return the itemid
	 */
	public int getItemid() {
		return itemid;
	}

	/**
	 * @param itemid the itemid to set
	 */
	public void setItemid(int itemid) {
		this.itemid = itemid;
	}

	/**
	 * @return the product
	 */
	public Product getProduct() {
		return product;
	}

	/**
	 * @param product the product to set
	 */
	public void setProduct(Product product) {
		this.product = product;
	}

	/**
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}

	/**
	 * @param price the price to set
	 */
	public void setPrice(double price) {
		this.price = price;
	}

	/**
	 * @return the quantity
	 */
	public int getQuantity() {
		return quantity;
	}

	/**
	 * @param quantity the quantity to set
	 */
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
}

