const page = require('./Page.js');



const signupButton = '#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > ul.sc-9d98fd33-5.dVueFL.sc-9d98fd33-7.kpJVrZ > li:nth-child(2) > div > a';
const blogButton = '#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(6) > div > div > div.sc-7b3980dc-8.iWLbyI > div > div:nth-child(3) > a > div > div.sc-7b3980dc-11.jZzYTn';
const compareSection = '[class="mchNoDecorate"] span';
const waitlistButton = '[class="sc-f97529d6-0 bjUuRN sc-897a80e3-0 kdgXXO mchNoDecorate"][href="/products/storage"]';
const calcButton = '#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(6) > div > div > div.sc-7b3980dc-8.iWLbyI > div > div:nth-child(6) > a > div > div.sc-7b3980dc-11.jZzYTn'
const productsButton = '[class="sc-f97529d6-0 bjUuRN sc-b74bae4-0 sc-b74bae4-1 fVDMEa dwPtxB mchNoDecorate"][href ="/products"]';
const solutionsButton = '[class="sc-f97529d6-0 bjUuRN sc-b74bae4-0 sc-b74bae4-1 fVDMEa dwPtxB mchNoDecorate"][href="/solutions"]';
const pricingButton = '[class="sc-f97529d6-0 bjUuRN sc-b74bae4-0 sc-b74bae4-1 fVDMEa dwPtxB mchNoDecorate"][href="/pricing"]';
const footer = '[class="sc-7b6c9f9b-3 iznSjj"]';
const facebook = '[href="https://www.facebook.com/Telnyx/"]';
const twitter = '[href="https://twitter.com/telnyx"]';
const source1 = '#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(6) > span'
const product1 = '#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(1)'
const solution1 = '#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(3)'
const price1= '#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(10)'
const nav_header1= '[class="Text-sc-5o8owa-0 sc-ce3c78c4-2 clNvhv juvWNo"]';
const nav_header2= '[class="Text-sc-5o8owa-0 sc-e6b6263e-3 clNvhv hEmNaW"] span';
const facebook_link = 'a[href="https://www.facebook.com/Telnyx/"]';
const twitter_link ='a[href="https://twitter.com/telnyx"]';

class LendingPage {
    getUrl(){
        return cy.url();
    }
    
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