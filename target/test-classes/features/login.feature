
@FLTAPS-1031
Feature: Default

	@FLTAPS-1007 @FLTAPS-1006
	Scenario Outline: Login with valid credentials
		Given The user is on the login page
		    When The user login using "<username>" and "<password>"
		    Then The user should see "<title>"
		
		   Examples:
		      | username        | password    | title           |
		      | user1           | UserUser123 | Quick Launchpad |
		      | salesmanager105 | UserUser123 | Dashboard       |
		      | storemanager85  | UserUser123 | Dashboard       |	

	@FLTAPS-1008 @FLTAPS-1006
	Scenario Outline: Login with invaid credentials
		Given The user is on the login page
		    When  The user login using invalid "<username>" or "<password>"
		    Then  The user should see error "<message>"
		
		    Examples:
		      | username        | password      | message                        |
		      | wrongusername   | UserUser123   | Invalid user name or password. |
		      | salesmanager105 | wrongpassword | Invalid user name or password. |
		      | storemanager85  | wrongpassword | Invalid user name or password. |
		      | user1           | wrongpassword | Invalid user name or password. |	

	@FLTAPS-1009 @FLTAPS-1006
	Scenario Outline: Login with empty fields
		Given The user is on the login page
		    When  The user login using empty "<username>" or "<password>"
		    Then  The user should see inputError"<message>"
		
		    Examples:
		      | username        | password    | message                    |
		      | user1           |             | Please fill out this field |
		      | salesmanager105 |             | Please fill out this field |
		      | storemanager85  |             | Please fill out this field |
		      |                 | UserUser123 | Please fill out this field |	

	@FLTAPS-1010 @FLTAPS-1006
	Scenario: Forgot password page
		Given The user is on the login page
		    When The user clicks on the Forgot your password link
		    Then The user navigates to the Forgot Password page	


	@FLTAPS-1011 @FLTAPS-1006
	Scenario: Remember Me Checkbox
		Given The user is on the login page
		    Then The user can see Remember Me link exists and is clickable	

	
	@FLTAPS-1012 @FLTAPS-1006
	Scenario Outline: Verifying the Enter key
		Given The user is on the login page
		    When The user login using "<username>" and "<password>" with keyboard enter key
		    Then The user should see "<title>"
		
		    Examples:
		      | username        | password    | title     |
		      | user1           | UserUser123 | Dashboard |
		      | salesmanager105 | UserUser123 | Dashboard |
		      | storemanager85  | UserUser123 | Dashboard |	


	@FLTAPS-1013 @FLTAPS-1006
	Scenario: Verifying the bullet signs
		Given The user is on the login page
		    When The user enters password
		    Then The user should see the password in bullet signs by default	


	@FLTAPS-1014 @FLTAPS-1006
	Scenario Outline: Verifying the Profile Name
		Given The user is on the login page
		    When The user login using "<username>" and "<password>"
		    Then The user should see user"<profileName>"
		
		    Examples:
		      | username        | password    | profileName |
		      | user1           | UserUser123 | John Doe    |
		      | salesmanager105 | UserUser123 | John Doe    |
		      | storemanager85  | UserUser123 | John Doe    |