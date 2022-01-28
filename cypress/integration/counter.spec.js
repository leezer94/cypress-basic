/// <reference types="cypress" />

describe('Ui-Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('should have the value number 10 by default', () => {
    cy.get('.count-display').should('have.value', '10');
  });
});
