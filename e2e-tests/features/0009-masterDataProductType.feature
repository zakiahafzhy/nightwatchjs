#MasterDataProductType
@MasterDataProductType
Feature: Master Data - Product Type

@C3176 @C3860
Scenario: User add new product type on master data menu
Given user already on sub menu product type
When user click button add new
And fill Product Type Name with 'Automation QA Product Type' and save it
Then success create new product type

@C3861
Scenario: User add new product type on master data menu with duplicate name
Given user already on sub menu product type
When user click button add new
And fill Product Type Name with 'Automation QA Product Type' and save it
Then show warning duplicate

@C3862 @C3863
Scenario: User edit product type name
Given user already on sub menu product type
When user click button edit
And change product type name with 'Automation QA Product Type Edited' and save it
Then success edit product type name

@C3864 @C3865
Scenario: User delete product type
Given user already on sub menu product type
When delete product type
Then success delete product type
