@MenuInfraandNetwork
Feature: Menu Infra dan Network

@C2911
Scenario: Open Menu Assessment
Given Open HomePage After Login
When I Click Icon Menu Assessment
Then I Success Open Menu Assessment

@C2892 @C2894 @C2897 @C2895
Scenario: Add New Infra and Network without mandatory data
Given I Success Open Menu Assessment Sub Menu Infra & Network
When I Click Add New Infra & Network
And I Click Button Create Infra & Network
Then Show Alert Data Mandatory Input is Required

@C2902 @C2898
Scenario: Success Add New Infra and Network
Given Open Pop Up Add New Assessment Sub Menu Infra & Network
When I Input Project Title in Pop Up Add New Assessment Sub Menu Infra & Network 'Project Title QA'
And I Input Company Name in Pop Up Add New Assessment Sub Menu Infra & Network 'QA Company'
And I Input Building in Pop Up Add New Assessment Sub Menu Infra & Network 'Building QA'
And I Input Floor in Pop Up Add New Assessment Sub Menu Infra & Network 'Floor QA'
And I Click Button Create Infra & Network
Then I Success Create New Infra & Network and redirect Detil Data

@C3656
Scenario: Input Data in Detil Observed Device
Given Redirect Detil New Infra & Network
When I Select Observed Device in Detil Infra & Network 'samsung'
And I Select Ownership in Detil Infra & Network 'xapiens'
And I Select Brand in Detil Infra & Network 'travel'
And I Input Specification in Detil Infra & Network 'Spesific QA'
And I Select on Perm or cloud in Detil Infra & Network 'cloud'
And I Input Qty in Detil Infra & Network '1'
And I Select Waranty in Detil Infra & Network 'active'
And I Input Notes in Detil Infra & Network 'Test Note'
And I Click Button Save in Detil Infra & Network
Then I Click Save pop Up Confirm in Detil & Network

# Scenario: Login Success
Given I visit Xswift page
# # When I provide email 'Dummy.Su@xapiens.id' and password 'Safety@2022'
# # Then I success sign in

@C2911
Scenario: Open Menu Assessment
Given Open HomePage After Login
When I Click Icon Menu Assessment
Then I Success Open Menu Assessment

@C2892 @C2894 @C2897 @C2895
Scenario: Add New Infra and Network without mandatory data
Given I Success Open Menu Assessment Sub Menu Infra & Network
When I Click Add New Infra & Network
And I Click Button Create Infra & Network
Then Show Alert Data Mandatory Input is Required

@C3622
Scenario: Duplicate Data Add New Infra and Network
Given Open Pop Up Add New Assessment Sub Menu Infra & Network
When I Input Project Title in Pop Up Add New Assessment Sub Menu Infra & Network 'Project Title QA'
And I Input Company Name in Pop Up Add New Assessment Sub Menu Infra & Network 'QA Company'
And I Input Building in Pop Up Add New Assessment Sub Menu Infra & Network 'Building QA'
And I Input Floor in Pop Up Add New Assessment Sub Menu Infra & Network 'Floor QA'
And I Click Button Create Infra & Network
Then Show Pop Up Project Title and Company Already exist

@C3657
Scenario: Delete Data Infra & Network
Given I visit Xswift page
When I Click Icon Menu Assessment
# And I Search Project Title 'Project Title QA'
And I Click Icon Delete List Project Assessment in Sub Menu Infra & Network
Then I Confrim Ok Pop Up Delete Project Assessment in Sub Menu Infra & Network