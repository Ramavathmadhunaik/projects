package com.onlinepay;

public class Gpay 
{
	
	private int gpin;
	private int upiPin;
	
	public int getGpin() 
	{
		return gpin;
	}
	
	
	public void setGpin(int gpin) 
	{
		this.gpin = gpin;
	}
	
	
	public int getUpiPin() 
	{
		return upiPin;
	}
	
	
	public void setUpiPin(int upiPin) 
	{
		this.upiPin = upiPin;
	}
	
	
	public static int checkphnoCount(long phno)
	{
		int phnoCount=0;
		while(phno>0)
		{
			phnoCount++;
			phno/=10;
		}
		return phnoCount;
		
	}
}
