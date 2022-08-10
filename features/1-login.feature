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

    Scenario Outline: Login with Email failed
        Given I access login with email page
        When I provide email <email> and password <password> to login
        Then I should see sign in with error <fieldemail> below email and error <fieldpassword> below password and notification popup <popup>
        Examples:
            | email                 | password        | fieldemail                          | fieldpassword                       | popup                                 |
            |                       |                 | This field should not be empty.     | This field should not be empty.     |                                       |
            | emiacc0105            | EMITestAcc@0105 | Invalid Email format.               |                                     |                                       |
            | emiacc0105@gmail.com  | EMITestAcc0105  | The email or password is incorrect. | The email or password is incorrect. |                                       |
            | emiacc0105@xapiens.id | EMITestAcc@0105 |                                     |                                     | The email has not been registered yet.|

    Scenario: Login success
        Given I access login with email page
        When I provide login email 'emiacc0105@gmail.com' and password 'EMITestAcc@0105' to login
        Then I am on EMI page with logged in account