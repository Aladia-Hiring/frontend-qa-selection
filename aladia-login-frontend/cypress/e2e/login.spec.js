describe('Login Page', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000/login'); 
  });

  it('displays the login form', () => {
    cy.get('h6').should('have.text', 'Enter your email'); 
    cy.get('input[type="email"]').should('be.visible'); 
    cy.get('button').contains('Enter').should('be.visible');
  });

  it('shows an error when the email is invalid', () => {
    cy.get('input[type="email"]').type('invalid-email'); 
    cy.get('button').contains('Enter').click();

    cy.get('.input-error-message')
      .should('be.visible')
      .and('contain', 'Invalid email');
  });

  it('redirects to the signup page with valid email', () => {
    const validEmail = 'test@example.com';

    cy.get('input[type="email"]').type(validEmail); // Type a valid email
    cy.get('button').contains('Enter').click(); // Click the enter button

    // Assert that the URL is updated to the signup page with the correct query parameter
    cy.url().should('include', '/signup?email=' + validEmail); 
  });

  it('shows terms and conditions link', () => {
    cy.get('a').contains('Terms & Conditions').should('be.visible'); // Check for Terms & Conditions link
  });
});
