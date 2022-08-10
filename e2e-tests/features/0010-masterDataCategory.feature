#MasterDataCategory
@MasterDataCategory
Feature: Master Data - Category

@C3937
Scenario: User add new category on master data menu
Given user already on sub menu category
When user click button add new
And fill Category Name with 'Automation QA Category' 
And choose Product Type Name
And click Save category
Then success save category

@C3938
Scenario: User add new category on master data menu with duplicate category name
Given user already on sub menu category
When user click button add new
And fill Category Name with 'Automation QA Category' 
And choose Product Type Name
And click Save category
Then will show warning duplicate category name

@C3939
Scenario: User edit category
Given user already on sub menu category
When user click edit on data
And change Category Name with 'Automation QA Category Edited'
And click Save category
Then success save category

@C3940
Scenario: User delete category
Given user already on sub menu category
When user click delete on data and confirm ok to delete
Then success save category