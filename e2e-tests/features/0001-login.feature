#LOGIN
@login
Feature: login

@C2797
Scenario: Empty Field Email And Password 
Given I visit Xswift page
When I Click Button Login
Then Show Alert Email and Password Empty not Found

@C2798
Scenario: email format does not match
Given Redirect Page Login Xswift
When I provide email 'Aditya.Jaya' and password ''
Then Show Alert email format does not match

@C3509
Scenario: Empty Field Password
Given Redirect Page Login Xswift
When I provide email 'Aditya.Jaya@xapiens.id' and password ''
Then Show Alert Password Empty not Found

@C2791
Scenario: Password does not match
Given I visit Xswift page
When I provide email 'Aditya.Jaya@xapiens.id' and password '123456789'
Then Show Pop Up Invalid Username and Password

@C2795
Scenario: Login Success
Given Redirect Page Login Xswift
When I provide email 'Dummy.Su@xapiens.id' and password 'Safety@2022'
And I Click Pop Up Info New Feature After Login
Then I success sign in

@C2799
Scenario: Logout Success
Given Redirect Homepage After Login
When I Click Icon Profile
And I Click Logout Akun
Then I Success Logout Akun