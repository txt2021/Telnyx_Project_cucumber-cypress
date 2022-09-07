import {Given,When,And,Then,} from "@badeball/cypress-cucumber-preprocessor";

const blogPage = require('../../pages/BlogPage.js');
const calcPage = require('../../pages/CalculatorPage.js');
const signupPage = require('../../pages/SignUpPage.js');
const lendingPage = require('../../pages/LendingPage.js');
const waitlistPage = require('../../pages/WaitlistPage.js');
const page = require('../../pages/Page.js');


Given('A user open main Telnyx page', () => {
  cy.visit("/");
});

//sign_up feature
When, And('A user clicks on {string} button', (button) => {
  switch(button){
    case 'Sign Up':
      lendingPage.clicksignupButton();
      break;
    case 'Create account':
      signupPage.clicksubmitButton();
      break
    case 'Fax':
      blogPage.clickfaxButton();
      break;
    case 'News&Events':
      blogPage.clicknewsandeventsButton();
      break;
    case 'Continue':
      calcPage.clickcontinueButton();
      break;
    default:
      console.log('Can not find button');
  }

  
});
And('A user enters {string} in {string} field', (content,field) => {
  switch(field){
    case 'Work email':
      signupPage.enterEmail(content);
      break;
   
    case 'search':
      blogPage.enterSearchText(content);
      break;
    default:
        console.log('Can not find input field');
  }  
});

Then('"Please enter a valid email address" message was displayed under the "Work email" field and user stays on the same page', () => {
  page.getUrl().should('include', '/sign-up')    
  signupPage.getEmail().should('be.visible')
});
And('A user enters {string} in "Password field"', (password) => {
     signupPage.enterPassword(password);  
});
Then('All "Password must" tips under the "Password" field must be green. User stays on the same page', () => {
  page.getUrl().should('include', '/sign-up')    
  signupPage.getPass().should(($lis) => {
    expect($lis).to.have.class('sc-3f0fa74c-5 leCkmJ')
  })
});
Then('"Be at least 12 characters long" tip under the "Password" field must be red User stays on the same page', () => {
  page.getUrl().should('include', '/sign-up')    
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
  page.getUrl().should('include', '/storage#form')    
  waitlistPage.getForm().should('be.visible')

});

//blog feature

And('A user clicks on {string}', (button) => {
  switch(button){
    case 'Blog':
      lendingPage.clickblogButton();
      break;
    case 'Savings Calculator':
      lendingPage.clickcalcButton();
      break;
    case 'See all products':
      lendingPage.clickproductsButton();
      break;
    case 'See all solutions':
      lendingPage.clicksolutionsButton();
      break;
    case 'See all pricing':
      lendingPage.clickpricingButton();
      break;
    case 'Follow on Facebook':
      lendingPage.clickfacebookButton();
      break;
    case 'Follow on Twitter':
      lendingPage.clicktwitterButton();
      break;
    default:
        console.log('Can not find button');
    
  }
  
});


And('A user presses Enter', () => {
  blogPage.clicksearchButton();
});



Then('Search results for {string} was displayed. Page URL should contains {string}', (searchtext,urlpart) => {
  page.getUrl().should('include', urlpart)    
  blogPage.getResult().should('have.text',"Search results for " + '"'+ searchtext +'"')

});

Then('{string} article title was displayed. Page URL should contains {string}', (searchtext,urlpart) => {
  page.getUrl().should('include', urlpart)    
  blogPage.getTitle().should('have.text',searchtext)

});

Then('{string} header was displayed under the content filter. Page URL should contains {string}', (searchtext,urlpart) => {
  page.getUrl().should('include', urlpart)    
  blogPage.getHeader().should('have.text',searchtext)

});


//calculator feature 

And('A user clicks on "Voice API" in "Which products do you use?" area', () => {
  calcPage.clickvoiceapiButton();
});


And('A user clicks on plus button near the "Local Numbers"', () => {
  calcPage.clickplusButton();
});

And('A user clicks on minus button near the "Toll-free Numbers" two times', () => {
  calcPage.clickminusButton();
  calcPage.clickminusButton();
});


Then('In "Your savings" area {string} number was displayed. User stays on the same page', (searchtext) => {
  page.getUrl().should('include', '/twilio-pricing-calculator')    
  //calcPage.getResult().should('have.text',searchtext +"/ year")

});

//navigation feature

When('A user hover to {string} in the header menu', (text) => {
  switch(text){
    case 'Products':
      lendingPage.hoverproductsButton();
      break;
    case 'Resources':
      lendingPage.hoverresourcesButton();
      break;
    default:
        console.log('Can not find button');

  }
  
  
});

When('Hover to {string} in the header menu', (text) => {
  switch(text){
    case 'Solutions':
      lendingPage.hoversolutionsButton();
      break;
    case 'Pricing':
      lendingPage.hoverpricingButton();
      break;
    default:
      console.log('Can not find button');
  }
  
  
});



Then('{string} header was displayed. Page url shoud include {string}', (header,urltext) => {
  page.getUrl().should('include', urltext)    
  lendingPage.getHeader1().should('have.text',header)

});
Then('{string} pricing header was displayed. Page url shoud include {string}', (header,urltext) => {
  page.getUrl().should('include', urltext)    
  lendingPage.getHeader2().should('have.text',header)

});

//social media feature
When('A user scroll down to the footer', () => {
  lendingPage.scrolltofooter();
  
});



Then('Telnyx {string} account was displayed', (media) => {  
  switch(media){
    case 'facebook':
      lendingPage.getFacebook().should('have.attr', 'target', '_blank');
      break;
    case 'twitter':
      lendingPage.getTwitter().should('have.attr', 'target', '_blank')
      break;
    default:
      console.log('Social media error');

  }  

});
