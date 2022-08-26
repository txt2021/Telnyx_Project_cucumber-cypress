import Page from './Page.cy.js'
const page = new Page();



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

class LendingPage {   
    
    clicksignupButton() {
        page.clickforce(signupButton);
    }
  
    scrolltofooter() {
        page.scrollIntoView(footer);
    }  
   
    hoverresourcesButton() {
        cy.get('#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(6) > span').click({ force: true })
    } 

    hoverproductsButton() {
        cy.get('#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(1)').click({ force: true })
    } 

    hoversolutionsButton() {
        cy.get('#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(3)').click({ force: true })
    } 

    hoverpricingButton() {
        cy.get('#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(10)').click({ force: true })
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
export default LendingPage