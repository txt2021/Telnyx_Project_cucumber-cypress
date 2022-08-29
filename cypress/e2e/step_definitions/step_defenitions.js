import {Given,When,And,Then,} from "@badeball/cypress-cucumber-preprocessor";

const blogPage = require('../../pages/BlogPage.js');
const calcPage = require('../../pages/CalculatorPage.js');
const signupPage = require('../../pages/SignUpPage.js');
const lendingPage = require('../../pages/LendingPage.js');
const waitlistPage = require('../../pages/WaitlistPage.js');


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
  lendingPage.getUrl().should('include', '/sign-up')    
  signupPage.getEmail().should('be.visible')
});
And('A user enters {string} in "Password field"', (password) => {
     signupPage.enterPassword(password);  
});
Then('All "Password must" tips under the "Password" field must be green. User stays on the same page', () => {
  lendingPage.getUrl().should('include', '/sign-up')    
  signupPage.getPass().should(($lis) => {
    expect($lis).to.have.class('sc-3f0fa74c-5 leCkmJ')
  })
});
Then('"Be at least 12 characters long" tip under the "Password" field must be red User stays on the same page', () => {
  lendingPage.getUrl().should('include', '/sign-up')    
  signupPage.getTips().should('have.class', 'sc-3f0fa74c-5 dlOEFS')

});

//waitlist feature
When('A user clicks on "Join the waitlist" on the head of the page', () => {
  lendingPage.clickwaitlistButton();
});
And('A user clicks on "Join the waitlist" green button on the opened page', () => {
  waitlistPage.clickwaitlistButton();  
});
Then('Application form for join the waitlist was displayed. Page URL should contains "#form"', () => {
  waitlistPage.getUrl().should('include', '/storage#form')    
  waitlistPage.getForm().should('be.visible')

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
  blogPage.getUrl().should('include', urlpart)    
  blogPage.getResult().should('have.text',"Search results for " + '"'+ searchtext +'"')

});

Then('{string} article title was displayed. Page URL should contains {string}', (searchtext,urlpart) => {
  blogPage.getUrl().should('include', urlpart)    
  blogPage.getTitle().should('have.text',searchtext)

});

Then('{string} header was displayed under the content filter. Page URL should contains {string}', (searchtext,urlpart) => {
  blogPage.getUrl().should('include', urlpart)    
  blogPage.getHeader().should('have.text',searchtext)

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
  calcPage.getUrl().should('include', '/twilio-pricing-calculator')    
  //calcPage.getResult().should('have.text',searchtext +"/ year")

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
  lendingPage.getUrl().should('include', urltext)    
  lendingPage.getHeader1().should('have.text',header)

});
Then('{string} pricing header was displayed. Page url shoud include {string}', (header,urltext) => {
  lendingPage.getUrl().should('include', urltext)    
  lendingPage.getHeader2().should('have.text',header)

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
  lendingPage.getFacebook().should('have.attr', 'target', '_blank')

});

Then('Telnyx twitter account was displayed', () => {  
  lendingPage.getTwitter().should('have.attr', 'target', '_blank')

});