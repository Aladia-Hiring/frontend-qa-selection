describe('Login Page Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should allow a user to log in with valid credentials', () => {
      cy.get('input[name="username"]').type('yourUsername');
      cy.get('input[name="password"]').type('yourPassword');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome').should('be.visible');
    });
  
    it('should show an error message for invalid credentials', () => {
      cy.get('input[name="username"]').type('wrongUsername');
      cy.get('input[name="password"]').type('wrongPassword');
      cy.get('button[type="submit"]').click();
      cy.contains('Invalid username or password').should('be.visible');
    });
  });