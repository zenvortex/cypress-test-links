/// <reference types="Cypress" />
describe('Checking cypress main site', function() {
  before(() => {
    cy.visit("/");    

  })    
  it('for absence of broken links', function() {
    cy.get('a:visible').each((element, index, $list) => {
      cy.get(element).invoke('attr','href').then(href =>{
        if(!href.includes('download.cypress.io') && !href.includes('mailto:')){
          cy.log('Checking link ' + href);
          cy.request({url: href, failOnStatusCode: false}).its('status').should('equal', 200); 
        }
      });
      
    });
    
  })
})