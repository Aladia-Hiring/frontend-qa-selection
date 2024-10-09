describe('Nuxt.js Home Page', () => {
    it('should load the home page', () => {
      cy.visit('/');
      cy.contains('Welcome to Nuxt!');
      cy.contains('Welcome');

    });
  });
  