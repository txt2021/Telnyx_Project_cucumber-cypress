Feature: Navigation menu

    Scenario: TC11 - Should check navigation to all Telnyx products 
        Given A user open main Telnyx page
        When A user hover to "Products" in the header menu
        And A user clicks on "See all products"
        Then "Products" header was displayed. Page url shoud include "/products"

    Scenario: TC12 - Should check navigation to all Telnyx solutions 
        Given A user open main Telnyx page
        When Hover to "Solutions" in the header menu
        And A user clicks on "See all solutions"
        Then "Solutions for Your Business" header was displayed. Page url shoud include "/solutions"

     Scenario: TC13 - Should check navigation to all Telnyx pricing 
        Given A user open main Telnyx page
        When Hover to "Pricing" in the header menu
        And A user clicks on "See all pricing"
        Then "Only pay for what you use" pricing header was displayed. Page url shoud include "/pricing"