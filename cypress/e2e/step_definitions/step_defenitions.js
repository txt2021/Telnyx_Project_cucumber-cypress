import {Given,When,And,Then,} from "@badeball/cypress-cucumber-preprocessor";

import SignUpPage from 'D:/trainee/Telnyx_Project_v2/cypress/pages/SignUpPage.js'
import LendingPage from '../../pages/LendingPage.js'
import WaitlistPage from '../../pages/WaitlistPage.js'
import BlogPage from '../../pages/BlogPage.js'
import CalculatorPage from '../../pages/CalculatorPage.js'
const signupPage = new SignUpPage();
const lendingPage = new LendingPage();
const waitlistPage = new WaitlistPage();
const blogPage = new BlogPage();
const calcPage = new CalculatorPage();


Given('A user open main Telnyx page', () => {
  cy.visit("/");
});

//sign_up feature
When('A user clicks on "Sign Up" button', () => {
  lendingPage.clicksignupButton();
});
And('A user enters {string} in "Work email" field', (testemail) => {
  signupPage.enterEmail(testemail);
});
And('A user clicks on "Create account" button', () => {
  signupPage.clicksubmitButton();
});
Then('"Please enter a valid email address" message was displayed under the "Work email" field and user stays on the same page', () => {
  cy.url().should('include', '/sign-up')    
  cy.get('[id="email_error"]').should('be.visible')
});
And('A user enters {string} in "Password field"', (password) => {
     signupPage.enterPassword(password);  
});
Then('All "Password must" tips under the "Password" field must be green. User stays on the same page', () => {
  cy.url().should('include', '/sign-up')    
  cy.get('#password_requirements > div').should(($lis) => {
    expect($lis).to.have.class('sc-3f0fa74c-5 leCkmJ')
  })
});
Then('"Be at least 12 characters long" tip under the "Password" field must be red User stays on the same page', () => {
  cy.url().should('include', '/sign-up')    
  cy.get('#password_requirements > div.sc-3f0fa74c-5.dlOEFS').should('have.class', 'sc-3f0fa74c-5 dlOEFS')

});

//waitlist feature
When('A user clicks on "Join the waitlist" on the head of the page', () => {
  lendingPage.clickwaitlistButton();
});
And('A user clicks on "Join the waitlist" green button on the opened page', () => {
  waitlistPage.clickwaitlistButton();  
});
Then('Application form for join the waitlist was displayed. Page URL should contains "#form"', () => {
  cy.url().should('include', '/storage#form')    
  cy.get('[id="mktoForm_2272"]').should('be.visible')

});

//blog feature
When('A user hover to "Resources" in the header menu', () => {
  lendingPage.hoverresourcesButton();
  
});
And('A user clicks on "Blog"', () => {
  lendingPage.clickblogButton();
});

And('A user enters {string} in the search field', (textforsearch) => {
  blogPage.enterSearchText(textforsearch);
});

And('A user presses Enter', () => {
  blogPage.clicksearchButton();
});

And('A user Clicks on "Fax" button', () => {
  blogPage.clickfaxButton();
});

And('A user clicks on "News&Events" button', () => {
  blogPage.clicknewsandeventsButton();
});


Then('Search results for {string} was displayed. Page URL should contains {string}', (searchtext,urlpart) => {
  cy.url().should('include', urlpart)    
  cy.get('[class="Text-sc-5o8owa-0 sc-438b0f02-3 ijJVSH kWhBMu"]').should('have.text',"Search results for " + '"'+ searchtext +'"')

});

Then('{string} article title was displayed. Page URL should contains {string}', (searchtext,urlpart) => {
  cy.url().should('include', urlpart)    
  cy.get('#articles > div > a:nth-child(1) > article > div.sc-b43e299b-4.gwdLhq > h2').should('have.text',searchtext)

});

Then('{string} header was displayed under the content filter. Page URL should contains {string}', (searchtext,urlpart) => {
  cy.url().should('include', urlpart)    
  cy.get('#articles > div > a:nth-child(1) > article > div.sc-b43e299b-4.gwdLhq > header > span > span').should('have.text',searchtext)

});


//calculator feature 
And('A user clicks on "Savings Calculator"', () => {
  lendingPage.clickcalcButton();
});

And('A user clicks on "Voice API" in "Which products do you use?" area', () => {
  calcPage.clickvoiceapiButton();
});

And('A user clicks on "Continue" button', () => {
  calcPage.clickcontinueButton();
});

And('A user clicks on plus button near the "Local Numbers"', () => {
  calcPage.clickplusButton();
});

And('A user clicks on minus button near the "Toll-free Numbers" two times', () => {
  calcPage.clickminusButton();
  calcPage.clickminusButton();
});


Then('In "Your savings" area {string} number was displayed. User stays on the same page', (searchtext) => {
  cy.url().should('include', '/twilio-pricing-calculator')    
  //cy.get('[class="Text-sc-5o8owa-0 sc-c7d3cfaa-1 gBsjXt fdlLDD"]').should('have.text',searchtext +"/ year")

});

//navigation feature
When('A user hover to "Products" in the header menu', () => {
  lendingPage.hoverproductsButton();
  
});

When('Hover to "Solutions" in the header menu', () => {
  lendingPage.hoversolutionsButton();
  
});

When('Hover to "Pricing" in the header menu', () => {
  lendingPage.hoverpricingButton();
  
});

And('A user clicks on "See all products"', () => {
  lendingPage.clickproductsButton();
  
});

And('A user clicks on "See all solutions"', () => {
  lendingPage.clicksolutionsButton();
  
});

And('A user clicks on "See all pricing"', () => {
  lendingPage.clickpricingButton();
  
});

Then('{string} header was displayed. Page url shoud include {string}', (header,urltext) => {
  cy.url().should('include', urltext)    
  cy.get('[class="Text-sc-5o8owa-0 sc-ce3c78c4-2 clNvhv juvWNo"]').should('have.text',header)

});
Then('{string} pricing header was displayed. Page url shoud include {string}', (header,urltext) => {
  cy.url().should('include', urltext)    
  cy.get('[class="Text-sc-5o8owa-0 sc-e6b6263e-3 clNvhv hEmNaW"] span').should('have.text',header)

});

//social media feature
When('A user scroll down to the footer', () => {
  lendingPage.scrolltofooter();
  
});

And('A user clicks on "Follow on Facebook"', () => {
  lendingPage.clickfacebookButton();
  
});

And('A user clicks on "Follow on Twitter"', () => {
  lendingPage.clicktwitterButton();
  
});

Then('Telnyx facebook account was displayed', () => {  
  cy.get('a[href="https://www.facebook.com/Telnyx/"]').should('have.attr', 'target', '_blank')

});

Then('Telnyx twitter account was displayed', () => {  
  cy.get('a[href="https://twitter.com/telnyx"]').should('have.attr', 'target', '_blank')

});