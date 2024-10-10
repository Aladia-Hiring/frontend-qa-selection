describe('Login Page with Visual Regression', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('/');
  });

  it('should submit the form with valid input', () => {
    // Ensure input is initially empty
    cy.get('input[type="email"]').should('have.value', '');

    // Take a snapshot of the initial login page (before typing)
    cy.matchImageSnapshot('login-page-initial');

    // Type a valid email, ensuring it's typed correctly
    cy.get('input[type="email"]').clear().type('test@example.com', { delay: 100 });

    // Assert that the correct email was typed
    cy.get('input[type="email"]').should('have.value', 'test@example.com');

    // Click the submit button
    cy.get('button.enter-button').click();

    // Ensure no validation errors are present
    cy.contains('Invalid email address.').should('not.exist');
    
    // Wait for successful submission message
    cy.contains('Form submitted successfully', { timeout: 4000 }).should('exist');

    // Take a snapshot after the form submission
    cy.matchImageSnapshot('form-submission-success');
  });

  it('should show an error for empty email', () => {
    cy.get('input[type="email"]').clear();
    cy.get('button.enter-button').click();
    cy.contains('Email is required.', { timeout: 10000 }).should('exist');

    // Take a snapshot of the error state
    cy.matchImageSnapshot('email-required-error');
  });

  it('should show an error for invalid email', () => {
    cy.get('input[type="email"]').clear().type('invalid-email', { delay: 100 });
    cy.get('input[type="email"]').should('have.value', 'invalid-email');
    cy.get('button.enter-button').click();
    cy.contains('Invalid email address.', { timeout: 4000 }).should('exist');

    // Take a snapshot of the invalid email state
    cy.matchImageSnapshot('invalid-email-error');
  });

  it('should handle Google login', () => {
    // Click the Google login button
    cy.get('button.link-btns').contains('Continue with Google').click();

    // Verify the action (you might want to stub this for actual login tests)
    cy.log('Google login clicked'); // Replace with actual assertion or action

    // Take a snapshot of the Google login button click
    cy.matchImageSnapshot('google-login-click');
  });

  it('should handle Facebook login', () => {
    // Click the Facebook login button
    cy.get('button.link-btns').contains('Continue with Facebook').click();

    // Verify the action (you might want to stub this for actual login tests)
    cy.log('Facebook login clicked'); // Replace with actual assertion or action

    // Take a snapshot of the Facebook login button click
    cy.matchImageSnapshot('facebook-login-click');
  });

  it('should handle Apple login', () => {
    // Click the Apple login button
    cy.get('button.link-btns').contains('Continue with Apple').click();

    // Verify the action (you might want to stub this for actual login tests)
    cy.log('Apple login clicked'); // Replace with actual assertion or action

    // Take a snapshot of the Apple login button click
    cy.matchImageSnapshot('apple-login-click');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('ui-login-test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.info-text').click();
    cy.get('.aladia-logo').click();
    cy.get('h1').click();
    cy.get('.email-label').click();
    cy.get('#email').click();
    cy.get('#email').clear('lid-email');
    cy.get('#email').type('lid-email');
    cy.get('.enter-button').click();
    cy.get('#email').click();
    cy.get('.enter-button').click();
    cy.get('#email').clear('st@example.com');
    cy.get('#email').type('st@example.com');
    cy.get('.enter-button').click();
    cy.get('.or-container').click();
    cy.get(':nth-child(4) > .link-btns > .img-text-cont').click();
    cy.get(':nth-child(5) > .link-btns > .img-text-cont').click();
    cy.get(':nth-child(6) > .link-btns > .img-text-cont').click();
    cy.get('.router-link-active').click();
    /* ==== End Cypress Studio ==== */

    // Take a snapshot of the UI interaction
    cy.matchImageSnapshot('ui-interaction');
  });
});
