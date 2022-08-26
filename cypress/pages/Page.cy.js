class Page {

clickforce(locator){
    cy.get(locator).click({ force: true });
}

scrollIntoView(locator){
    cy.get(locator).scrollIntoView();
}

}
export default Page