/* ==== Test Created with Cypress Studio ==== */
it('signup-user', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:3000/auth/signup');
  cy.get('.link-login').click();
  cy.get('p > a').click();
  cy.get('#terms-checkbox').check();
  cy.get(':nth-child(2) > .email-input').clear('n');
  cy.get(':nth-child(2) > .email-input').type('name');
  cy.get(':nth-child(3) > .email-input').clear('us');
  cy.get(':nth-child(3) > .email-input').type('user');
  cy.get(':nth-child(4) > .email-input').clear('e');
  cy.get(':nth-child(4) > .email-input').type('ema');
  cy.get(':nth-child(5) > .email-input').click();
  cy.get(':nth-child(5) > .email-input').clear('1');
  cy.get(':nth-child(5) > .email-input').type('12345678');
  cy.get(':nth-child(6) > .email-input').clear('1');
  cy.get(':nth-child(6) > .email-input').type('12345678');
  cy.get('.enter-button').click();
  cy.get(':nth-child(4) > .email-input').clear();
  cy.get(':nth-child(4) > .email-input').type('ema@em.com');
  cy.get('.enter-button').click();
  /* ==== End Cypress Studio ==== */
});