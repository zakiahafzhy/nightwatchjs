@MenuAplicationSupport
Feature: Menu Aplication Support

@C3682
Scenario: Open Sub Menu Application Support in Menu Assesment
Given I Redirect Menu Assessment
When I Click Sub Menu Application Support in Menu Assesment
Then I Succsess Open Sub Menu Aplication Support in Menu Assesment

@C3683
Scenario: Create Data Aplication Support in Sub Menu Aplication Support
Given I Redirect Sub Menu Aplication Support
When I Click Button Add New Aplication Support in Sub Menu Aplication Support
And I Input Aplication Name in Sub Menu Aplication Support 'Aplication QA'
And I Select Company Name in Sub Menu Aplication Support 'Company Testing'
And I Input Client Name in Sub Menu Aplication Support 'Client QA'
And I Input What kind of application it is 'Test QA'
And I Select Yes Is this application a core bussiness
And I Select COTS COTS or Custom Developed
And I Input COTS Vendor 'Test COTS'
And I Input Special Requirement on Technologies 'Test Req'
And I Select Yes Are users from various companies
And I Select Yes Are users from various departments
And I Select Yes Is the report more than 5
And I Select Yes Is there any relation with other application
And I Select Yes Is there any approval process
And I Click Button Next Step 2
And I Input Application server host name 'QA Host'
And I Input What is the current Operating System 'Test QA'
And I Input What is the application server type 'Type Server QA'
And I Input What is the web server type 'Web QA'
And I Input What is the database server host name 'Database QA'
And I Input What is the database server type 'Database Server QA'
And I Input What is the version of the database being used 'Version'
And I Select Yes Is this application required to be accessible by external
And I Click Button Next Step 3
And I Click Button Submit Aplication Support
Then I Click Pop Up Confrim Create Aplication Support

@C3687
Scenario: Delete Aplication Support
Given I Redirect Sub Menu Aplication Support
# When I Input Search Aplication Name 'Aplication QA'
When I Click Button Delete Aplication Support
Then I Confrim Pop Up Delete Aplication Support

@C3685
Scenario: Save Draft Aplication Support
Given I Redirect Sub Menu Aplication Support
When I Click Button Add New Aplication Support in Sub Menu Aplication Support
And I Input Aplication Name in Sub Menu Aplication Support 'Aplication QA'
And I Select Company Name in Sub Menu Aplication Support 'Company Testing'
And I Input Client Name in Sub Menu Aplication Support 'Client QA'
And I Input What kind of application it is 'Test QA'
And I Select Yes Is this application a core bussiness
And I Select COTS COTS or Custom Developed
And I Input COTS Vendor 'Test COTS'
And I Input Special Requirement on Technologies 'Test Req'
And I Select Yes Are users from various companies
And I Select Yes Are users from various departments
And I Select Yes Is the report more than 5
And I Select Yes Is there any relation with other application
And I Select Yes Is there any approval process
And I Click Button Next Step 2
And I Input Application server host name 'QA Host'
And I Input What is the current Operating System 'Test QA'
And I Input What is the application server type 'Type Server QA'
And I Input What is the web server type 'Web QA'
And I Input What is the database server host name 'Database QA'
And I Input What is the database server type 'Database Server QA'
And I Input What is the version of the database being used 'Version'
And I Select Yes Is this application required to be accessible by external
And I Click Button Next Step 3
And I Click Button Save Draft Aplication Support
Then I Click Yes Confrim Pop Up Aplication Support

@C3687
Scenario: Delete Aplication Support
Given I Redirect Sub Menu Aplication Support
# When I Input Search Aplication Name 'Aplication QA'
When I Click Button Delete Aplication Support
Then I Confrim Pop Up Delete Aplication Support