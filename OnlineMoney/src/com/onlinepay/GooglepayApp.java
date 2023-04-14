package com.onlinepay;

import java.util.Scanner;

public class GooglepayApp 
{
	static Gpay gpay = new Gpay();
	static Bank bank;
	static Scanner scan = new Scanner(System.in);
	static GooglepayApp gapp= new GooglepayApp();
	
	// checking the UPI pin validation
	public  boolean checkUpiPin(int upipin)
	{
		if(BankFactory.upipinCount(upipin)==6 && upipin==gpay.getUpiPin())
			return true;
		return false;
				
	}
	
	// checking the balance of bank
	public static void checkBalance(String name)
	{
		
		bank= BankFactory.getBankInstance(name);
		for (int upiCount = 0; upiCount <3; upiCount++) 
		{
			System.out.println("enter the Upi Pin:");
			int upiPin = scan.nextInt();
			if(gapp.checkUpiPin(upiPin))
			{
				bank.balance();
				break;
			}
			else
				System.err.println("Invalid pin enter the pin in 3 attempts");
			blockAccount(upiCount);
		}
	}
	
	
	// doing the transaction to others through bank
	public static void transaction(long phno,String name)
	{
		bank=BankFactory.getBankInstance(name);
		System.out.println("Enter the amount to transfer : ");
		double amount = scan.nextDouble();
		for (int upiCount = 0; upiCount <3; upiCount++) 
		{
			System.out.println("enter the Upi Pin:");
			int upiPin = scan.nextInt();
			if(gapp.checkUpiPin(upiPin))
			{
				bank.transfer(phno,amount);
				break;
			}
			else
				System.err.println("Invalid pin enter the pin in 3 attempts");
			blockAccount(upiCount);
		}
	}
	
	// checking the no.of attempts the user entered the pin
	public static void blockAccount(int count)
	{
		if(count==2)
			System.err.println("your account is blocked wait for 24 hours");
		
	}
	
	
	public static void main(String[] args) 
	{
		System.out.println("Welcome to GooglePay");
		System.out.println();
		
		// setting the Googlepin correctly
		boolean pin=true;
		while (pin) 
		{
			System.out.println("set your GPin\nEnter the 4-digits Gpin");
			int gpin = scan.nextInt();
			System.out.println("Re-Enter the Gpin to confirm");
			int gpin1=scan.nextInt();
			if(BankFactory.gpinCount(gpin1)==4 && BankFactory.gpinCount(gpin)==4&& gpin1==gpin)
			{
				System.out.println("Gpin is set successfully");
				gpay.setGpin(gpin);
				pin=false;
			}
			else
			{
				System.out.println("Enter the gpin correctly");
			}
		}
		
		//setting the UPI pin correctly
		pin=true;
		System.out.println();
		while (pin) 
		{
			System.out.println("set your UPIPin\nEnter the 6-digits UPI pin");
			int upipin = scan.nextInt();
			System.out.println("Re-Enter the UPI pin to confirm");
			int upipin1=scan.nextInt();
			if(BankFactory.gpinCount(upipin1)==6 && BankFactory.gpinCount(upipin)==6&&upipin1==upipin)
			{
				System.out.println("UPI pin is set successfully");
				gpay.setUpiPin(upipin);;
				pin=false;
			}
			else
			{
				System.out.println("Enter the correctly");
			}
		}
		
		// doing the checking and transaction works through banks
		boolean flag=true;
		System.out.println();
		while (flag) 
		{
			System.out.println("1.press for checking Balance\n2.press for transferAmount");
			int option = scan.nextInt();
			switch (option) 
			{
			
				// checking the balance for banks
				case 1:
				{
					System.out.println("1.press for SBI\n2.press for ICICI");
					int bankOption = scan.nextInt();
					switch (bankOption) 
					{
						case 1:
						{
							checkBalance("SBI");
						}
						break;
						case 2:
						{
							checkBalance("ICICI");
						}
						 break;
					}
				}
				break;
				
				//transfer the amount to others through gpay
				case 2:
				{
					// checking the phone number
					boolean flag1= true;
					while (flag1) 
					{
						System.out.println("enter the phone number which you want to transfer: ");
						long phno = scan.nextLong();
						if(gpay.checkphnoCount(phno)==10)
						{
							flag1=false;
							System.out.println("1.press for SBI\n2.press for ICICI");
							int bankOption = scan.nextInt();
							switch (bankOption) 
							{
								case 1:
								{
									transaction(phno,"SBI");
								}
								break;
								case 2:
								{
									transaction(phno,"ICICI");
								}
								break;
							}
						}
						else
							System.err.println("Enter the correct 10-digits number");
					}
					
				}
				break;
			}
		
			// checking the user want to continue  or exit from gpay
			System.out.println("Press 1 to continue\n press any key to exit");
			int key = scan.nextInt();
			if(key!=1)
			{
				flag=false;
				System.out.println("Thank you visit again");

			}
					
		}
	}
}
