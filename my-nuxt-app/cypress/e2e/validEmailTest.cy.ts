describe('template spec', () => {
  it('valid email', () => {
    cy.visit('http://localhost:3000/')


    /* ==== Generated with Cypress Studio ==== */
    cy.get('.email-field').type('someone@example.com');
    cy.get('.button').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.next-page').should('be.visible');
  })

 
  it('invalid email', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('.email-field').type('someone');
    cy.get('.button').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.next-page').should('not.exist');

  });
})