const page = require('./Page.js');



const signupButton = 'header>div li [href="/sign-up"]';
const blogButton = 'header a[href="/resources"]>div>div>span';
const compareSection = '[class="mchNoDecorate"] span';
const waitlistButton = 'header span>a[href="/products/storage"]';
const calcButton = 'header a[href="/twilio-pricing-calculator"] div>div>span'
const productsButton = 'header a[href ="/products"]';
const solutionsButton = 'header a[href ="/solutions"]';
const pricingButton = 'header a[href ="/pricing"]';
const footer = 'header ~ main ~ footer';
const facebook = '[href="https://www.facebook.com/Telnyx/"]';
const twitter = '[href="https://twitter.com/telnyx"]';
const source1 = 'header ul~div~div>ul>li:nth-child(6)>span'
const product1 = 'header ul~div~div>ul>li:nth-child(1)>span'
const solution1 = 'header ul~div~div>ul>li:nth-child(3)>span'
const price1= 'header ul~div~div>ul>li:nth-child(10)>span'
const nav_header1= 'main h1';
const nav_header2= 'main h1>span';
const facebook_link = 'a[href="https://www.facebook.com/Telnyx/"]';
const twitter_link ='a[href="https://twitter.com/telnyx"]';

class LendingPage {
    
    
    getHeader1(){
        return cy.get(nav_header1)
    }
    getHeader2(){
        return cy.get(nav_header2)
    }

    getFacebook(){
        return cy.get(facebook_link)
    }

    getTwitter(){
        return cy.get(twitter_link)
    }
    
    clicksignupButton() {
        page.clickforce(signupButton);
    }
  
    scrolltofooter() {
        page.scrollIntoView(footer);
    }  
   
    hoverresourcesButton() {
        page.clickforce(source1);
    } 

    hoverproductsButton() {
        page.clickforce(product1)
    } 

    hoversolutionsButton() {
        page.clickforce(solution1)
    } 

    hoverpricingButton() {
        page.clickforce(price1)
    } 

    clickblogButton(){
        page.clickforce(blogButton);
    }
    clickwaitlistButton() {
        page.clickforce(waitlistButton);
    }

    clickcalcButton() {
        page.clickforce(calcButton);
    }

    clickproductsButton() {
        page.clickforce(productsButton);
    }

    clicksolutionsButton() {
        page.clickforce(solutionsButton);
    }

    clickpricingButton() {
        page.clickforce(pricingButton);
    }

    clickfacebookButton() {
        page.clickforce(facebook);
    }

    clicktwitterButton() {
        page.clickforce(twitter);
    }

 
}
module.exports = new LendingPage()