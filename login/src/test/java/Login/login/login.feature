Feature: Login 
         Verify that user login is unsuccessful after passing incorrect credentials
         but successful only with valid credentials
         


Scenario Outline: User logs in with valid or invalid credentials
    Given User visits the community platform login page     
#    And   User clicks on login button on landing page    
    When  User inputs his "<email>" and "<password>"      
    And   User taps on the login button     
    Then  user should be informed with a success or failure "<notice>" depending on the credentials used   
    

Examples:
    |   email                        |   password   | notice|  
    |   testing.amalitechgmail.com   |   12345678!A | Please check your credentials and try again.|     
    |   4syllable@gmail.com        |   12345678!A | Please check your credentials and try again.|	   
    |   testing.amalitech@gmail.com  |   12354678!A | Please check your credentials and try again.|	    
    |   testing.amalitech.gmail.com  |   12345678!A | Please check your credentials and try again.| 		 	  	
    |   testing.amalitech@gmail.com  |   12345678   | Please check your credentials and try again.|				
    |   testing.amalitech@gmail.com  |   12345678!A | Authentication success|
    |   testing.amalitech@gmail.com  |              | Please check your credentials and try again.|
    |                                |   12345678!A | Please check your credentials and try again.|
    |   testing.amalitech@gmail.com  |   aaaaaaaaaA | Please check your credentials and try again.|
    |   testing.amalitech@gmail.com  |   1234567890 | Please check your credentials and try again.|	
  	