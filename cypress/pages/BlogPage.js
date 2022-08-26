import Page from './Page.cy.js'
const page = new Page();

const searchInput = '[id="search"]';
const faxButton = '#__next > div.sc-62badcbb-0.gQAeUA > main > div > div.sc-438b0f02-1.dTViGT > div.sc-afdc1d86-0.gPPsDG > div:nth-child(1) > ul > li:nth-child(4) > button';
const newsandeventsButton = '#__next > div.sc-62badcbb-0.gQAeUA > main > div > div.sc-438b0f02-1.dTViGT > div.sc-afdc1d86-0.gPPsDG > div:nth-child(2) > ul > li:nth-child(3) > button';

class BlogPage {   
       
    clicksearchButton() {
        cy.get(searchInput).type('{enter}')
    }

    enterSearchText(textforsearch) {
        cy.get(searchInput)
            .clear({ force: true })
            .type(textforsearch);
        return this
    }

    clickfaxButton() {
        page.clickforce(faxButton);
    }

    clicknewsandeventsButton() {
        page.clickforce(newsandeventsButton);
    }

 
}
export default BlogPage