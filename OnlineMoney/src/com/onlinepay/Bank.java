package com.onlinepay;

public abstract class Bank extends Gpay
{
	public abstract void balance();
	public abstract void transfer(long phno,double amount);
}