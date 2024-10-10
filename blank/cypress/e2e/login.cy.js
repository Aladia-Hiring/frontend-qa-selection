
/* ==== Test Created with Cypress Studio ==== */
it('login-user', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:3000/auth/login');
  cy.get('#email').clear();
  cy.get('#email').type('lid-email');
  cy.get('.enter-button').click();
  cy.get('#email').clear();
  cy.get('#email').type('lid@gm');
  cy.get('.enter-button').click();
  cy.get('#email').clear('lid@gm.');
  cy.get('#email').type('lid@gm.com');
  cy.get('.enter-button').click();
  cy.get(':nth-child(4) > .link-btns > .img-text-cont').click();
  cy.get(':nth-child(5) > .link-btns > .img-text-cont').click();
  cy.get(':nth-child(6) > .link-btns > .img-text-cont').click();
  cy.get('p > a').click();
  /* ==== End Cypress Studio ==== */
});
