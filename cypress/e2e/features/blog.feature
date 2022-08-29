Feature: Blog page

    Scenario: TC06 -Should check Blog search work 
        Given A user open main Telnyx page
        When A user hover to "Resources" in the header menu
        And A user clicks on "Blog"
        And A user enters "testing" in the search field
        And A user presses Enter
        Then Search results for "testing" was displayed. Page URL should contains "search?q=testing"

     Scenario: TC07 - Should check blog filter by product work 
        Given A user open main Telnyx page
        When A user hover to "Resources" in the header menu
        And A user clicks on "Blog"
        And A user Clicks on "Fax" button
        Then "Fax APIs, the basics and benefits. " article title was displayed. Page URL should contains "/resources?topic=Fax"

     Scenario: TC08 - Should check blog filter by content work 
        Given A user open main Telnyx page
        When A user hover to "Resources" in the header menu
        And A user clicks on "Blog"
        And A user clicks on "News&Events" button
        Then "News & Events" header was displayed under the content filter. Page URL should contains "/resources?category=News%20%26%20Events"
