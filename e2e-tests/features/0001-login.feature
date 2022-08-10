#LOGIN
@login
Feature: login

@TC_01_008
Scenario: empty email and password 
Given user visit Xswift page
When user sign in with empty email & password
Then show alert "Email input cannot be empty" and "Password input cannot be empty"