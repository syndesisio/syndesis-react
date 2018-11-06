describe('Settings Page - ', () => {

  it('should load the settings page', () => {
    cy.visit('http://localhost:3000/settings');
  });

  it('should click every label and automatically focus its corresponding form control', () => {
    cy.get('label').each(element => {
      const inputId = element.attr('for');
      const labelText = element.text().trim();
      cy.wrap(element).click();
      cy.focused().should('have.attr', 'id', inputId).type(`Value for ${labelText}`);
    });
  });

});
