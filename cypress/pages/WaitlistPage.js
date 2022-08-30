const page = require('./Page.js');

const waitlistButton = 'main h1+div+div>div>a';
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