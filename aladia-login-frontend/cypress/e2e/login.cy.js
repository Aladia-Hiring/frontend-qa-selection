describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login');
    });
  
    it('should load the login page successfully', () => {
      cy.contains('Enter your email').should('be.visible');
    });
  
    it('should allow typing in the email field', () => {
      cy.get('input[id="email"]').type('test@example.com').should('have.value', 'test@example.com');
    });
  
    it('should show validation error for invalid email', () => {
      cy.get('input[id="email"]').type('invalidemail');
      cy.get('button').contains('Enter').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Please enter a valid email address.');
      });
    });
  
    it('should navigate to signup page with email on valid email input', () => {
      cy.get('input[id="email"]').type('test@example.com');
      cy.get('button').contains('Enter').click();
      cy.url().should('include', '/signup?email=test@example.com');
    });
  });
  

describe('Login Page with Fixtures', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login');
      cy.fixture('user').as('userData');
    });
  
    it('should use fixture data for login', function () {
      cy.get('input[id="email"]').type(this.userData.email);
      cy.get('button').contains('Enter').click();
      cy.url().should('include', `/signup?email=${this.userData.email}`);
    });
  });