#MasterDataService
@MasterDataService
Feature: Master Data - Service

@C3960
Scenario: User open sub menu services
Given user already on master data menu
When user click sub menu Services
Then will show list of services

@C3961
Scenario: User open detail service
Given user already on sub menu services
When user click detail service
Then will show detail service