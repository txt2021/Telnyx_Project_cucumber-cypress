import Page from './Page.cy.js'
const page = new Page();

const submitButton = 'button[type="submit"]';

class SignUpPage {
    
    enterEmail(testemail) {
        cy.get('[id="email"]')
            .clear({ force: true })
            .type(testemail);
        return this
    }


    enterPassword(testpassword) {
        cy.get('[id="password"]')
            .clear({ force: true })
            .type(testpassword);
        return this
    }


    clicksubmitButton() {
        page.clickforce(submitButton);
    }
    

}
export default SignUpPage