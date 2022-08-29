const page = require('./Page.js');

const waitlistButton = '[class="sc-31a8cefb-10 jnwLUb"] [class="sc-5d3a275a-0 eKznVb"] a[href="#form"]';
const waitlist_form = '[id="mktoForm_2272"]';


class WaitlistPage {   
    
   
    clickwaitlistButton() {
        page.clickforce(waitlistButton);
    }
    getForm(){
        return cy.get(waitlist_form)
    }
    getUrl(){
        return cy.url();
    }

 
}
module.exports = new  WaitlistPage()