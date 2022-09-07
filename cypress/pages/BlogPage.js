const page = require('./Page.js');

const searchInput = '[id="search"]';
const faxButton = 'div[aria-labelledby="filter-by-product"] ul>li:nth-child(4)>button';
const newsandeventsButton = 'div[aria-labelledby="filter-by-content"]>ul>li:nth-child(3)>button';
const search_res = 'div#articles>div:nth-child(1)';
const search_header = '#articles > div > a:nth-child(1) > article > div > h2';
const search_header2 = '#articles > div > a:nth-child(1) > article > div > header > span > span';


class BlogPage {   

   

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