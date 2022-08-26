Feature: Saving calculator

    Scenario: TC09 - Savings Calculator work with default settings on Telnyx
        Given A user open main Telnyx page
        When A user hover to "Resources" in the header menu
        And A user clicks on "Savings Calculator"
        And A user clicks on "Voice API" in "Which products do you use?" area
        And A user clicks on "Continue" button
        And A user clicks on "Continue" button
        Then In "Your savings" area "$4,152" number was displayed. User stays on the same page

    Scenario: TC10 - Savings Calculator work with custom settings on Telnyx
        Given A user open main Telnyx page
        When A user hover to "Resources" in the header menu
        And A user clicks on "Savings Calculator"
        And A user clicks on "Voice API" in "Which products do you use?" area
        And A user clicks on "Continue" button
        And A user clicks on plus button near the "Local Numbers"
        And A user clicks on minus button near the "Toll-free Numbers" two times
        And A user clicks on "Continue" button
        Then In "Your savings" area "$3,887" number was displayed. User stays on the same page