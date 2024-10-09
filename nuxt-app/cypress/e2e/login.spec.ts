describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });
  
  /* ==== Test Created with Cypress Studio ==== */
  it('if email exist redirect to the dashboard page', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email').clear('u');
    cy.get('#email').type('user@example.com{enter}');
    cy.get('.submit > button').click();
    /* ==== End Cypress Studio ==== */

    // cy.compareSnapshot('DashBoard Page');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('if email not exist redirect to sign up page', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email').clear('n');
    cy.get('#email').type('nonexistentemail@gmail.com');
    cy.get('.submit > button').click();
    /* ==== End Cypress Studio ==== */

    // cy.compareSnapshot('Sing up Page');
  });
});
  