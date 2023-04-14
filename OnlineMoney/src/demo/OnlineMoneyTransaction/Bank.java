package demo.OnlineMoneyTransaction;

public abstract class Bank extends UPIPinBanks 
{
	public abstract void checkBalance();
//	public abstract void transfer(long phno,double amount);
	public abstract void transaction(long phno, double amount);
	}
