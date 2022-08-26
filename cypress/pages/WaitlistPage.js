import Page from './Page.cy.js'
const page = new Page();


const waitlistButton = '[class="sc-31a8cefb-10 jnwLUb"] [class="sc-5d3a275a-0 eKznVb"] a[href="#form"]';



class WaitlistPage {   
    
   
    clickwaitlistButton() {
        page.clickforce(waitlistButton);
    }

 
}
export default WaitlistPage