@FLTAPS-1111
Feature: Default

	@FLTAPS-1089
	Scenario Outline: The user log out
		The user logs out
						Given The user is on the login page
						And The user login using "<username>" and "<password>"
					    When The user logs out
		                Then The user should be back to the Login page
					

					Examples:
						      | username        | password    |
						      | user1           | UserUser123 |
						      | salesmanager105 | UserUser123 |
						      | storemanager85  | UserUser123 |	

	#
	@FLTAPS-1105
	Scenario Outline: After logged out going back
		The user navigate back
						Given The user is on the login page
						And The user login using "<username>" and "<password>"
					    When The user logs out
		                Then The user should be back to the Login page
		                Then The user clicks step back button
		                Then The user should not go back, should be on the Login page
					
					
					
					
					Examples:
						      | username        | password    |
						      | user1           | UserUser123 |
						      | salesmanager105 | UserUser123 |
						      | storemanager85  | UserUser123 |	


	@FLTAPS-1106 @smoke
	Scenario Outline: Trying to log out by closing the tab
		The user closes the tab
						Given The user is on the login page
						And The user login using "<username>" and "<password>"
					    When The user closes the open tab
		                Then The user is on the login page
		                Then The user should be on the Login page
					
					
					
					
					Examples:
						      | username        | password    |
						      | user1           | UserUser123 |
						      | salesmanager105 | UserUser123 |
						      | storemanager85  | UserUser123 |