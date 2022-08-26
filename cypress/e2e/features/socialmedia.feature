Feature: Social Media accounts

    Scenario: TC14 - Connection to Telnyx facebook account
        Given A user open main Telnyx page
        When A user scroll down to the footer
        And A user clicks on "Follow on Facebook"
        Then Telnyx facebook account was displayed

    Scenario: TC15 - Connection to Telnyx twitter account
        Given A user open main Telnyx page
        When A user scroll down to the footer
        And A user clicks on "Follow on Twitter"
        Then Telnyx twitter account was displayed