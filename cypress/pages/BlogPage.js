const page = require('./Page.js');

const searchInput = '[id="search"]';
const faxButton = '#__next > div.sc-62badcbb-0.gQAeUA > main > div > div.sc-438b0f02-1.dTViGT > div.sc-afdc1d86-0.gPPsDG > div:nth-child(1) > ul > li:nth-child(4) > button';
const newsandeventsButton = '#__next > div.sc-62badcbb-0.gQAeUA > main > div > div.sc-438b0f02-1.dTViGT > div.sc-afdc1d86-0.gPPsDG > div:nth-child(2) > ul > li:nth-child(3) > button';
const search_res = '[class="Text-sc-5o8owa-0 sc-438b0f02-3 ijJVSH kWhBMu"]';
const search_header = '#articles > div > a:nth-child(1) > article > div.sc-b43e299b-4.gwdLhq > h2';
const search_header2 = '#articles > div > a:nth-child(1) > article > div.sc-b43e299b-4.gwdLhq > header > span > span';


class BlogPage {   

    getUrl(){
        return cy.url();
    }

    getResult(){
        return cy.get(search_res)
    }

    getTitle(){
        return cy.get(search_header)
    }

    getHeader(){
        return cy.get(search_header2)
    }
       
    clicksearchButton() {
        page.type(searchInput,'{enter}')
    }

    enterSearchText(textforsearch) {
        page.type(searchInput,textforsearch)
        return this
    }

    clickfaxButton() {
        page.clickforce(faxButton);
    }

    clicknewsandeventsButton() {
        page.clickforce(newsandeventsButton);
    }

 
}
module.exports = new BlogPage()