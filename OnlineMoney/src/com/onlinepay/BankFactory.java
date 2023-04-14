package com.onlinepay;

import java.util.Scanner;

public class BankFactory  
{
	static Bank bank;
	static Scanner scan = new Scanner(System.in);
	
	public static Bank getBankInstance(String bankName)
	{
		Bank b=null;
		if(bankName.equals("SBI"))
			b=new SBI();
		else if(bankName.equals("ICICI"))
			b=new ICICI();
		return b;
	}
	
	
	public static int upipinCount(int upipin)
	{
		int upipinCount=0;
		while(upipin>0)
		{
			upipinCount++;
			upipin/=10;
		}
		return upipinCount;
		
	}
	
	public static int gpinCount(int gpin)
	{
		int gpinCount=0;
		while(gpin>0)
		{
			gpinCount++;
			gpin/=10;
		}
		return gpinCount;
		
	}
	
	
	
}
