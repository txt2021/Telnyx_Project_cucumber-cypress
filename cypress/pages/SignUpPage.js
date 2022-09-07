const page = require('./Page.js');

const submitButton = 'button[type="submit"]';
const email = '[id="email"]';
const passwd = '[id="password"]';
const email_signup = '[id="email_error"]';
const pass_signup = '#password_requirements > div';
const pass_tips = '#password_requirements > div~div';

class SignUpPage {
    
    enterEmail(testemail) {
        page.type(email,testemail)
        return this
    }


    enterPassword(testpassword) {
        page.type(passwd,testpassword)
        return this
    }


    clicksubmitButton() {
        page.clickforce(submitButton);
    }

    getEmail(){
        return cy.get(email_signup)
    }

    getPass(){
        return cy.get(pass_signup)
    }
    
    getTips(){
        return cy.get(pass_tips)
    }

    

}
module.exports = new SignUpPage()