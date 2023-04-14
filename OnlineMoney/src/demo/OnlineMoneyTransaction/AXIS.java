package demo.OnlineMoneyTransaction;


public class AXIS extends Bank
{
	double amount=18000.0;

	@Override
	public void checkBalance() 
	{
		System.out.println("Your AXIS Account Balance :"+ amount);
	}

	public void transaction(long phno,double transferamount) 
	{
		if(amount>=transferamount)
		{
			System.out.println("your amount is successfully transfer to :"+phno);
			amount-=transferamount;
			System.out.println("your AXIS account balance :"+amount);
		}
		else
		{
			System.err.println("InSufficient amount");
		}
		
	}

	

	
	}