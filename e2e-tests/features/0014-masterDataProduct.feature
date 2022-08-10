#MasterDataProduct
@MasterDataProduct
Feature: Master Data - Product

@C3963
Scenario: User open sub menu product
Given user already on master data menu
When user click sub menu product
Then will show list of product

@C3964
Scenario: Check mandatory field add new product
Given user on sub menu product
When user click button add new product
And click button save product
Then will show warning field required

@C3965
Scenario: User add new product
Given pop up add new product already show
When user fill product name with 'Automation Product'
And fill product category with 'A Category Khusus Automation'
And choose service
And click button save product
Then success add new product

@C3966
Scenario: User see detail product
Given user on sub menu product
When user click see detail product
Then will show detail product

@C3967
Scenario: User edit product
Given user on sub menu product
When user click edit on product
And edit product name with 'Edited'
And click button save product edit
Then success edit product

@C3968
Scenario: User delete product
Given user on sub menu product
When user click delete on product
Then will success delete product