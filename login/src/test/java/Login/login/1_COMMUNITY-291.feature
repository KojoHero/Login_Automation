@COMMUNITY-190
Feature: Verify Login with valid and invalid credentials

	@TEST_COMMUNITY-291
	Scenario Outline: Verify Login with valid and invalid credentials
		    Given User visits the community platform login page    
		    When  User inputs his "<email>" and "<password>"     
		    And   User taps on the login button    
		    Then  user should be informed with a success or failure "<notice>" depending on the credentials used  
		    
		 
		Examples:
		    |   email                        |    password   | notice|  
		    |   testing.amalitechgmail.com   |   12345678!Aa | Please check your credentials and try again.|     
		    |   4syllable@gmail.com          |   12345678!Aa | Please check your credentials and try again.|	   
		    |   testing.amalitech@gmail.com  |   12354678!Aa | Please check your credentials and try again.|	    
		    |   testing.amalitech.gmail.com  |   12345678!Aa | Please check your credentials and try again.| 		 	  	
		    |   testing.amalitech@gmail.com  |    12345678   | Please check your credentials and try again.|				
		    |   testing.amalitech@gmail.com  |               | An error occured.|
		    |                                |   12345678!Aa | An error occured.|
		    |   testing.amalitech@gmail.com  |    aaaaaaaaaA | Please check your credentials and try again.|
		    |   testing.amalitech@gmail.com  |    1234567890 | Please check your credentials and try again.|	
		
