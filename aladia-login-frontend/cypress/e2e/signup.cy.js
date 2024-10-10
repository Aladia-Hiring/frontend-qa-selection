
describe('Signup Page', () => {
    beforeEach(() => {
      cy.visit('/signup');
    });
  
    it('should render the signup form', () => {
      cy.get('h1').contains('Enter your details'); 
      cy.get('input[id="email"]').should('be.visible'); 
      cy.get('button[type="submit"]').should('be.visible');
    });
  
    it('should allow a user to submit a valid email', () => {
      const validEmail = 'test@example.com';
  
      cy.get('input[type="email"]').type(validEmail);
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/otpReceive');
    });
  
    it('should not allow an invalid email submission', () => {
      const invalidEmail = 'invalid-email';
  
      cy.get('input[type="email"]').type(invalidEmail);
      cy.get('button[type="submit"]').click();
  
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Please enter a valid email address.');
      });
    });
  });
  