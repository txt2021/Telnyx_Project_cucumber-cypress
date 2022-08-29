class Page {

clickforce(locator){
    cy.get(locator).click({ force: true });
}

scrollIntoView(locator){
    cy.get(locator).scrollIntoView();
}

type(locator,text){
    cy.get(locator).type(text,{ force: true });
}



}
module.exports = new Page()