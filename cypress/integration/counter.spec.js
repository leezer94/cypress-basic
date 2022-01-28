/// <reference types="cypress" />

describe('Ui-Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('should have the value number 10 by default', () => {
    cy.get('.count-display').should('have.value', '10');
  });

  it('should increase by number 1 when user clicks plus button', () => {
    cy.get('.plus-button').click();
    cy.get('.count-display').should('have.value', '11');
  });

  it('should decrease by number 1 when user clicks minus button', () => {
    cy.get('.minus-button').click();
    cy.get('.count-display').should('have.value', '9');
  });

  it(`shouldn't decrease the value below number 8`, () => {
    cy.get('.minus-button').click();
    cy.get('.minus-button').click();
    cy.get('.minus-button').click();
    cy.get('.minus-button').click();
    cy.get('.count-display').should('have.value', '8');
  });

  it(`shouldn't increase the value above number 12 `, () => {
    cy.get('.plus-button').click();
    cy.get('.plus-button').click();
    cy.get('.plus-button').click();
    cy.get('.plus-button').click();
    cy.get('.count-display').should('have.value', '12');
  });
});
