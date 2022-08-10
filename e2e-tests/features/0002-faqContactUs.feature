#FAQContactUs
@FAQContactUs
Feature: FAQContactUs

@C2795
Scenario: Login Success
Given I visit Xswift page
When I provide email 'Dummy.Su@xapiens.id' and password 'Safety@2022'
And I Click Button Login
Then I success sign in

@C2954
Scenario: Open FAQ Page
Given I already login
When I click icon FAQ on homepage
Then Show list FAQ

@C2803 @C2956
Scenario: Check button Contact Us
Given I on FAQ Page
When I click button Contact Us
Then Show pop up contact us

@C2958 @C2960 @C2961 @C2962
Scenario: Check mandatory field on Contact Us
Given Pop up contact us already Show
When I didn't fill any field and click button Submit
Then will show warning required

@C3121
Scenario: Contact Us - User upload file > 2MB
Given Pop up contact us already Show
When user upload file with 'Incorrect Size File'
And click button submit 
Then will show warning file more than 2MB

@C2975 @C2977 @C3120
Scenario: Contact Us - User successfully submit the form
Given Pop up contact us already Show
When user choose Full Name with 'Yani Iriana Putri'
And user input Mobile Phone Number '0864753874839'
And user choose Topic with 'Devices Issue'
And user fill Message with 'Test QA'
And user upload file with 'Correct File'
And click button submit
Then show pop up successfully submit