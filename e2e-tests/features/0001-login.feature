#LOGIN
@login
Feature: login

@C2797
Scenario: Empty Field Email And Password 
Given I visit Xswift page
When I Click Button Login
Then Show Alert Email and Password Empty not Found

