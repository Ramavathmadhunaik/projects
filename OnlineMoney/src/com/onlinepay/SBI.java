package com.onlinepay;

public  class SBI extends Bank
{
	static double amount=12000.0;

	public void balance() 
	{
		System.out.println("Your account balance on ICICI :"+amount);
	}
	@Override
	public void transfer(long phno,double transferamount) 
	{
		if(amount>transferamount)
		{
			System.out.println("your amount is successfully transfer to :"+phno);
			amount-=transferamount;
			System.out.println("your ICICI account balance :"+amount);
		}
		else
		{
			System.err.println("InSufficient amount");
		}
				
	}
	
	
	
	

	

	

}
