Feature: Login page

    Background: Access Login Page
        Given I visit EMI page
        When I click Account header
        Then I am on login with phone number page

    Scenario Outline: Login with Phone Number failed
        Given I am on login with phone number page
        When I provide phone number <phoneNo> to login
        Then I should see sign in with phone number error <field> below phone number field and notification popup <popup>
        Examples:
            | phoneNo      | field                           | popup                                         |
            |              | This field should not be empty. |                                               |
            | 812345678910 |                                 | The phone number has not been registered yet. |
