#MasterDataContract
@MasterDataContract
Feature: Master Data - Contract

@C3706 
Scenario: User open sub menu contract
Given user already on master data menu
When user click sub menu contract
Then will show list of contract

@C3707 
Scenario: User check mandatory fill add new contract
Given user already on sub menu contract
When user click button add new contract
And click button save contract
Then will show warning field add new contract required

@C3709
Scenario: User add new contract
Given pop up add new contract already shown
When user fill company contract with 'Khusus Automation'
And fill contract number with 'QACONTRACT01'
And choose contract start '21/07/2022'
And choose contract end '21/07/2023'
And click button save contract
Then will success add new contract

@C3739	
Scenario: User edit products on contract
Given user already on master data menu
When user click sub menu contract
And click icon seen to add products on contract
And add products to contract with 'Managed Device'
And fill quantity product with '2'
And fill rates with '200'
And fill discount product with '1'
And click button add products to contract
And click button save add product to contract
Then will success add product to contract

@C3710
Scenario: User add new contract with same contract number
Given user already on sub menu contract
When user click button add new contract 
When user fill company contract with 'Khusus Automation'
And fill contract number with 'QACONTRACT01'
And choose contract start '21/07/2022'
And choose contract end '21/07/2023'
And click button save contract
Then will show warning contract exists 

@C3981
Scenario: User edit contract
Given user already on master data menu
When user click sub menu contract
And click button edit contract
And fill contract number with '2'
And click button save edit contract
Then will success edit contract

@C3982
Scenario: User delete contract
Given user already on sub menu contract
When user click icon delete contract
Then contract will be successfully deleted