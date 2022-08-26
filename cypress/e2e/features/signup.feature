Feature: Sign Up page

    Scenario: TC01 - Enter incorrect email in "work email" field in "Sign up" form
        Given A user open main Telnyx page
        When A user clicks on "Sign Up" button
        And A user enters "testmail@com" in "Work email" field
        And A user clicks on "Create account" button
        Then "Please enter a valid email address" message was displayed under the "Work email" field and user stays on the same page

    Scenario: TC03 - Enter equal to 11 characters password in "Password" field in "Sign up" form
        Given A user open main Telnyx page
        When A user clicks on "Sign Up" button
        And A user enters 'T_123456789' in "Password field"
        And A user clicks on "Create account" button
        Then "Be at least 12 characters long" tip under the "Password" field must be red User stays on the same page

     Scenario: TC02,TC04 - Enter equal to 12(13) characters password in "Password" field in "Sign up" form
        Given A user open main Telnyx page
        When A user clicks on "Sign Up" button
        And A user enters '<password>' in "Password field"
        Then All "Password must" tips under the "Password" field must be green. User stays on the same page

    Examples:
    |password|
    |T_1234567890|
    |T_12345678901| 

  

  
   