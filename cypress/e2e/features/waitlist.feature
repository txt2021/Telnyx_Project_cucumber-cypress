Feature: Join the waitlist

    Scenario: TC05 - Join the waitlist on Telnyx
        Given A user open main Telnyx page
        When A user clicks on "Join the waitlist" on the head of the page
        And A user clicks on "Join the waitlist" green button on the opened page
        Then Application form for join the waitlist was displayed. Page URL should contains "#form"
