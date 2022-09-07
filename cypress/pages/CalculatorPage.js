const page = require('./Page.js');

const voiceapiButton = 'header~div>div>:nth-child(3)';
const continueButton = 'header~div>div>button';
const plusButton = '#local-numbers+button';
const minusButton = '[for="local-numbers"]+div>button:nth-child(1)';
const calc_res = 'header~div>div>h2';

class CalculatorPage {   
    

    getResult(){
        return cy.get(calc_res)
    }


    clickvoiceapiButton() {
        page.clickforce(voiceapiButton);
    }

    clickcontinueButton() {
        page.clickforce(continueButton);
    }

    clickplusButton() {
        page.clickforce(plusButton);
    }
 
    clickminusButton() {
        page.clickforce(minusButton);
    }
}
module.exports = new CalculatorPage()