#LOGIN
@login
Feature: login

@TC_01_001
Scenario: Login with registered email and valid password 
Given user visit Xswift page
When user input registered email "nugi@gmail.com" and valid password "12345"
Then user successfully login and direct to homepage

@TC_01_002
Scenario: Login with registered email and invalid password 
Given user visit Xswift page
When user input valid email "nugi@gmail.com" and invalid password "invalid12345"
Then show pop up "Invalid user email and password. Please make sure your email and password are correct"

@TC_01_003
Scenario: Login with invalid email format and valid password  
Given user visit Xswift page
When user input valid email "lalala.xyz" and valid password "12345"
Then show alert "Please enter a valid email address (ex format: name@example.com)"

@TC_01_004
Scenario: Login with unregistered email and valid password 
Given user visit Xswift page
When user input unregistered email "zakia@gmail.com" and invalid password "12345"
Then show pop up "Email is unregistered. Please make sure your email and password are registered"

@TC_01_005
Scenario: Login with empty email and password 
Given user visit Xswift page
When user click login button without input email and password field
Then show alert "Email input cannot be empty. Password input cannot be empty"

@TC_01_006
Scenario: Login with empty email and valid password
Given user visit Xswift page
When user input valid password only "12345"
And user click login button
Then show alert "Email input cannot be empty"

@TC_01_007
Scenario: Login with valid email and empty password 
Given user visit Xswift page
When user input valid email only "nugi@gmail.com"
And user click login button
Then show alert "Password input cannot be empty"

