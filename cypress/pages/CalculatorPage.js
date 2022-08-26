import Page from './Page.cy.js'
const page = new Page();

const voiceapiButton = '#__next > div.sc-62badcbb-0.gQAeUA > main > div.sc-725c5ca6-0.eXKGRc > div.sc-8143a648-0.bSwPmE > div > div:nth-child(3) > div > div:nth-child(3) > div';
const continueButton = '[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-7 cSsJix UYAGn eUnEoi hBNXWZ"]';
const plusButton = '#__next > div.sc-62badcbb-0.gQAeUA > main > div.sc-725c5ca6-0.eXKGRc > div.sc-8143a648-0.bSwPmE > div > div.sc-948d727a-0.jVrZQH > div:nth-child(1) > div > div > button:nth-child(3)';
const minusButton = '#__next > div.sc-62badcbb-0.gQAeUA > main > div.sc-725c5ca6-0.eXKGRc > div.sc-8143a648-0.bSwPmE > div > div.sc-948d727a-0.jVrZQH > div:nth-child(2) > div > div > button:nth-child(1)';

class CalculatorPage {   
       
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
export default CalculatorPage