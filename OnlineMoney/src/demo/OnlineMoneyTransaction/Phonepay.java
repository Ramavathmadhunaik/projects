package demo.OnlineMoneyTransaction;

import java.util.InputMismatchException;
import java.util.Scanner;
public class Phonepay 
{
	static Scanner scan = new Scanner(System.in);
	static UPIPinBanks upiBank = new UPIPinBanks();
	static Bank sbi = new SBI();
	static Bank icici = new ICICI();
	static Bank axis = new AXIS();
	
	
	// count the digits of mobile number
	public static int countPhno(long number)
	{
		int count=0;
		while(number>0)
		{
			count++;
			number/=10;
		}
		return count;
	}
	
	//count the digits of upi pin
	public static int countUPI(int number)
	{
		int count=0;
		while(number>0)
		{
			count++;
			number/=10;
		}
		return count;
	}
	
	// registering the mobile number
	public static void register()
	{
		try
		{
			System.out.println();
			System.out.println("------------------");
			System.out.println("Enter the mobilenumber to register: ");
			long mobilenumber = scan.nextLong();
			if(countPhno(mobilenumber)==10)
			{
				checkOtp();
			}
			else
			{
				register();
			}
		}
		catch(Exception e)
		{
			System.out.println("----------------------------");
			System.out.println("Enter the mobilenumber in number format");
			scan.nextLine();
			register();
		}
	}
	
	// generating and checking the otp
	public static void checkOtp()
	{
		int otp = (int)(Math.random()*9000)+1000;
		System.out.println("The generated otp :"+ otp);
		System.out.println("------------------------");
		System.out.println("Enter the otp to vertify the Mobile number:");
		int otp1=0;
		try
		{
			int userotp = scan.nextInt();
			if(otp==userotp)
			{
				System.out.println(" your mobile number is verified succesfully");
				
			}
			else
			{
				checkOtp();
			}
		}
		catch(InputMismatchException e)
		{
			System.out.println("---------------------");
			System.out.println("Enter the otp in number format:");
			scan.nextLine();
			checkOtp();
		}
		
	}
	
	//Setting Upi pin for Sbi Bank
	public static void sbiUpi()
	{
		try
		{
			System.out.println("Enter the 6-digits Upi Pin");
			int Upi = scan.nextInt();
			System.out.println("Re-Enter the Upi Pin");
			int Upi1 = scan.nextInt();
			if(countUPI(Upi)==6 && Upi==Upi1)
			{
				upiBank.setSbiUpi(Upi);
				System.out.println("SBI Bank UPI set successfully");
			}
			else
			{
				sbiUpi();
			}
		}
		catch(Exception e)
		{
			System.out.println("Enter the UPI in number format ");
			scan.nextLine();
			sbiUpi();
		}
		
	}

	//setting upi pin for icici bank
	public static void iciciUpi()
	{
		try
		{
			System.out.println("Enter the 6-digits Upi Pin");
			int Upi = scan.nextInt();
			System.out.println("Re-Enter the Upi Pin");
			int Upi1 = scan.nextInt();
			if(countUPI(Upi)==6 && Upi==Upi1)
			{
				upiBank.setIciciUpi(Upi);;
				System.out.println("ICICI Bank UPI set successfully");
			}
			else
			{
				iciciUpi();
			}
		}
		catch(Exception e)
		{
			System.out.println("Enter the UPI in number format ");
			scan.nextLine();
			iciciUpi();
		}
		
	}
	
	//setting upi pin for axis bank
	public static void axisUpi()
	{
		try
		{
			System.out.println("Enter the 6-digits Upi Pin");
			int Upi = scan.nextInt();
			System.out.println("Re-Enter the Upi Pin");
			int Upi1 = scan.nextInt();
			if(countUPI(Upi)==6 && Upi==Upi1)
			{
				upiBank.setAxisUpi(Upi);;
				System.out.println("AXIS Bank UPI set successfully");
			}
			else
			{
				axisUpi();
			}
		}
		catch(Exception e)
		{
			System.out.println("Enter the UPI in number format ");
			scan.nextLine();
			axisUpi();
		}
		
	}
	
	//checking balance for sbi bank
	public static void sbiUPICheckBalance()
	{
		for (int i = 3; i >0; i--) 
		{
			try
			{
				System.out.println("Enter the 6-digit SBI UPI Pin");
				int userpin = scan.nextInt();
				if(Phonepay.countUPI(userpin)==6 && userpin==upiBank.getSbiUpi())
				{
					sbi.checkBalance();	
					break;
				}	
			}
			catch(Exception e)
			{
				System.out.println("Enter the upi pin in number format");
				scan.nextLine();
			}
			blockAccount(i);	
		}
	}
	
	
	//checking balance for icici bank
		public static void iciciUPICheckBalance()
		{
			for (int i = 3; i >0; i--) 
			{
				try
				{
					System.out.println("Enter the 6-digit SBI UPI Pin");
					int userpin = scan.nextInt();
					if(Phonepay.countUPI(userpin)==6 && userpin==upiBank.getIciciUpi())
					{
						icici.checkBalance();	
						break;
					}	
				}
				catch(Exception e)
				{
					System.out.println("Enter the upi pin in number format");
					scan.nextLine();
				}
				blockAccount(i);	
			}
		}
		
		//checking balance for axis bank
		public static void axisUPICheckBalance()
		{
			for (int i = 3; i >0; i--) 
			{
				try
				{
					System.out.println("Enter the 6-digit SBI UPI Pin");
					int userpin = scan.nextInt();
					if(Phonepay.countUPI(userpin)==6 && userpin==upiBank.getAxisUpi())
					{
						axis.checkBalance();;	
						break;
					}	
				}
				catch(Exception e)
				{
					System.out.println("Enter the upi pin in number format");
					scan.nextLine();
				}
				blockAccount(i);	
			}
		}
		
		
	//doing transaction for sbi bank
	public static void sbiUPITransaction(long phno) 
	{
		System.out.println("Enter the amount to transfer : ");
		double amount = scan.nextDouble();
		for (int i = 3; i >0; i--) 
		{
			try
			{
				System.out.println("Enter the 6-digit SBI UPI Pin");
				int userpin = scan.nextInt();
				if(Phonepay.countUPI(userpin)==6 && userpin==upiBank.getSbiUpi())
				{
					sbi.transaction(phno,amount);;	
					break;
				}	
			}
			catch(Exception e)
			{
				System.out.println("Enter the upi pin in number format");
				scan.nextLine();
			}
			blockAccount(i);	
		}
		
	}
	
	//doing transaction for icici bank
		public static void iciciUPITransaction(long phno) 
		{
			System.out.println("Enter the amount to transfer : ");
			double amount = scan.nextDouble();
			for (int i = 3; i >0; i--) 
			{
				try
				{
					System.out.println("Enter the 6-digit SBI UPI Pin");
					int userpin = scan.nextInt();
					if(Phonepay.countUPI(userpin)==6 && userpin==upiBank.getIciciUpi())
					{
						icici.transaction(phno,amount);;	
						break;
					}	
				}
				catch(Exception e)
				{
					System.out.println("Enter the upi pin in number format");
					scan.nextLine();
				}
				blockAccount(i);	
			}
			
		}
		
		//doing transaction for axis bank
		public static void axisUPITransaction(long phno) 
		{
			System.out.println("Enter the amount to transfer : ");
			double amount = scan.nextDouble();
			for (int i = 3; i >0; i--) 
			{
				try
				{
					System.out.println("Enter the 6-digit SBI UPI Pin");
					int userpin = scan.nextInt();
					if(Phonepay.countUPI(userpin)==6 && userpin==upiBank.getAxisUpi())
					{
						axis.transaction(phno,amount);;	
						break;
					}	
				}
				catch(Exception e)
				{
					System.out.println("Enter the upi pin in number format");
					scan.nextLine();
				}
				blockAccount(i);	
			}
			
		}
		
	//checking the no.of attempts for entering upi pin
	public  static void blockAccount(int count) 
	{
		if(count==1)
		{
			System.out.println("Your Account is Blocked for 24 hrs");
			System.out.println("Thank you");
			System.exit(0);
		}
	}
	
	
	// checking the phone number
	public static long phnumberCheck()
	{
		long phno1=0;
		try
		{
			System.out.println("Enter the mobile number:");
			long phno = scan.nextLong();
			phno1=phno;
			if(countPhno(phno)==10)
			{
				return phno;
			}
			else
			{
				phnumberCheck();
			}
		}
		catch(Exception e)
		{
			System.out.println("Enter the mobile number in number format:");
			scan.nextLine();
			phnumberCheck();
		}
		return phno1;
	}
	

	public static void main(String[] args) 
	{
		System.out.println("Welcome to Phonepay");
		System.out.println("---------------------");
		System.out.println();
		register();
		System.out.println("Set the UPI Pin");
		System.out.println("1.press for SBI\n2.press for ICICI\n3.press for Axis Bank");
		int bankOption = scan.nextInt();
		if(bankOption==1)
		{
			sbiUpi();
		}
		else if(bankOption==2)
		{
			iciciUpi();
		}
		else if(bankOption==3)
		{
			axisUpi();
		}
		
		boolean flag=true;
		while(flag)
		{
			System.out.println("1.press for SBI\n2.press for ICICI\n3.press for Axis Bank");
			int bankopt=scan.nextInt();
			if(bankopt==1)
			{
				System.out.println("1.press for checkBalance\n2.Transaction");
				int choice = scan.nextInt();
				if(choice==1)
				{
					sbiUPICheckBalance();
				}
				else if(choice==2)
				{
					sbiUPITransaction(phnumberCheck());
				}
			}
			else if(bankopt==2)
			{
				System.out.println("1.press for checkBalance\n2.Transaction");
				int choice = scan.nextInt();
				if(choice==1)
				{
					iciciUPICheckBalance();
				}
				else if(choice==2)
				{
					iciciUPITransaction(phnumberCheck());
				}
				
			}
			else if(bankopt==3)
			{
				System.out.println("1.press for checkBalance\n2.Transaction");
				int choice = scan.nextInt();
				if(choice==1)
				{
					axisUPICheckBalance();
				}
				else if(choice==2)
				{
					axisUPITransaction(phnumberCheck());
				}
			}
			
			// checking the user want to continue  or exit from phone pay
			System.out.println("Press 1 to continue\n press any key to exit");
			char key = scan.next().charAt(0);
			if(key!='1')
			{
				flag=false;
				System.out.println("Thank you visit again");
			}

		}
		
	}

}