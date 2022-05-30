@login
Feature: Login

@7694 @C97 @C116
Scenario: Login
Given I visit EMI page
When I click Account header
Then I am on login page
And I should see multiple login methods