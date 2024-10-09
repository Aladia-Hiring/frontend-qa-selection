describe('Login View Email Validation', () => {
    beforeEach(() => {
      // Visit the page that contains the login view
      cy.visit('http://localhost:3000/');  // Adjust the URL path if needed
    });
  
    it('should display next page content when a valid email is entered', () => {
      // Enter a valid email in the email field
      cy.get('input[name="email"]').type('test@example.com');
  
      // Simulate pressing "Enter"
      cy.get('button').contains('Enter').click();
  
      // Assert that the login form is no longer visible (because it should be hidden via v-if)
      cy.get('.login-form').should('not.exist');
  
      // Assert that content from the next page is displayed (use a specific selector or text that's visible only on the next page)
      cy.get('.next-page').should('be.visible');
    });
  
    it('should show an error when an invalid email is entered', () => {
      // Enter an invalid email in the email field
      cy.get('input[name="email"]').type('test');
  
      // Simulate pressing "Enter"
      cy.get('button').contains('Enter').click();
  
      // Assert that an error message is shown (customize based on your app's behavior)
      cy.contains('Invalid Email').should('be.visible');
  
      // Ensure the next page content is not displayed
      cy.get('.next-page').should('not.exist');
    });
  });