describe('Login Page', () => {
    beforeEach(() => {
      // Visit the login page
      cy.visit('/'); // Adjust this if necessary
    });
  
    it('should submit the form with valid input', () => {
      // Input a valid email
      cy.get('input[type="email"]').type('test@example.com');
      
      // Click the submit button
      cy.get('button.enter-button').click();
  
      // Check for successful submission message
      cy.contains('Form submitted successfully').should('exist');
    });
  
    it('should show an error for empty email', () => {
      // Click the submit button without entering an email
      cy.get('button.enter-button').click();
  
      // Check for error message
      cy.contains('Email is required.').should('exist');
    });
  
    it('should show an error for invalid email', () => {
      // Input an invalid email
      cy.get('input[type="email"]').type('invalid-email');
      
      // Click the submit button
      cy.get('button.enter-button').click();
  
      // Check for error message
      cy.contains('Invalid email address.').should('exist');
    });
  
    it('should handle Google login', () => {
      // Click the Google login button
      cy.get('button.link-btns').contains('Continue with Google').click();
  
      // Verify the action (you might want to stub this for actual login tests)
      cy.log('Google login clicked'); // Replace with actual assertion or action
    });
  
    it('should handle Facebook login', () => {
      // Click the Facebook login button
      cy.get('button.link-btns').contains('Continue with Facebook').click();
  
      // Verify the action (you might want to stub this for actual login tests)
      cy.log('Facebook login clicked'); // Replace with actual assertion or action
    });
  
    it('should handle Apple login', () => {
      // Click the Apple login button
      cy.get('button.link-btns').contains('Continue with Apple').click();
  
      // Verify the action (you might want to stub this for actual login tests)
      cy.log('Apple login clicked'); // Replace with actual assertion or action
    });
  });
  