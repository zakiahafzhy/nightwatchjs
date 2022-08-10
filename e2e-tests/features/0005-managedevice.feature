@MenuManageDevice
Feature: Menu Manage Device

# @C2795
# Scenario: Login Success
# Given I visit Xswift page
# When I provide email 'Dummy.Su@xapiens.id' and password 'Safety@2022'
# And I Click Pop Up Info New Feature After Login
# Then I success sign in

@C3974 @C3038
Scenario: Create Pre Assessment without mandatory data
Given I Open Menu Manage Device in Assessment
When I Click Button Add New in Manage Device
And I Click Button Create in Pop up Create Manage Device
Then Show Alert without mandatory data

@C3039 @C3040 @C3041 @C3042
Scenario: Create Pre Assessment in Manage Device
Given Succses Open Form Pre Assessment in Manage Device
When I Input Project Title in Manage Device 'Project Title QA'
And I Input Company Name in Manage Device 'Company Testing'
And I Input Client Name PIC in Manage Device 'PIC QA'
And I Click Button Create in Pop up Create Manage Device
And I Select What devices do you want to manage
And I Input Number Device in detil manage device '12345'
And I Click Button Confrim Step 1 in detil manage device
And I Input How many computer devices still have Warranty Support '10%'
And I Select If there is a damaged unit that is not covered by the warranty 'only'
And I Input How many devices that are over 5 years old '10%'
And I Input What computer brands and models are currently used 'Probook'
And I Select Ownership of devices that are spread over the user 'owned'
And I Input How many devices do you have for each Branch Office '10'
And I Select Yes Does the company have a dedicated storage room for IT Devices
And I Select Yes Is there a policy
And I Input Note Step 1 'Test QA'
And I Click Button Next Step
And I Input How does the company manage IT Inventory 'Test'
And I Select No Do you currently have Remote Application Software
And I Select Yes Has the OS Image been provided by the Company
And I Input What is the current number of Windows OS distributions for each version 'test'
And I Select No Is the computer OS installation already using a system such as Microsoft Deployment Toolkit or MS Intune
And I Select Yes Is there a system available for Windows Patch Updates such as
And I Select Yes Is there a system available for deploying software silently
And I Select No Is there a standard antivirus
And I Select No Do you have backup storage for ex user device
And I Click Button Next Step
And I Input How does the company manage Software 'Test'
And I Input What commercial software do you currently have and how many licenses are there for each software 'Test'
And I Input What type of Office Suites are owned and distributed to the user 'Test'
And I Click Button Next Step
And I Select No Is there any branch location
And I Input How many branch offices your company have 'test'
And I Select No Does it require a special on site Engineer for HO and each branch office
Then I Click Button Submit

@C4002
Scenario: Delete Data Manage Device
Given I Open Menu Manage Device in Assessment
When I Click Icon Delete in list data manage device
Then I Confrim Ok Pop Up Delete Project Assessment in Sub Menu Infra & Network