describe('Settings Page - ', () => {

  it('should load the settings page', () => {
    cy.visit('http://localhost:3000/settings');
  });

  it('should click every label and automatically focus its corresponding form control', () => {
    cy.get('label').each(element => {
      const inputId = element.attr('for');
      const labelText = element.text().trim();
      const inputValue = `Value for ${labelText}`;
      cy.wrap(element).click();
      cy.focused()
        .type(inputValue)
        .should('have.attr', 'id', inputId)
        .and('have.value', inputValue)
        .clear();
    });
  });



  // it('is redirected when using cy request', () => {
  //   cy.request({
  //     url: '/oauth/authorize',
  //     method: 'GET',
  //     followRedirect: false,
  //     qs: {
  //       client_id: 'camel-k-ui',
  //       response_type: 'token',
  //       redirect_uri: encodeURIComponent('http://localhost:3000/token')
  //     },
  //     // auth: {
  //     //   user: '',
  //     //   pass: ''
  //     // }
  //     form: true
  //   })
  //   .then((resp) => {
  //     expect(resp.status).to.eq(302);;
  //   });
  // });




  // it('should enter a valid apiUri and authUri', () => {
  //   cy.server();
  //   cy.route({
  //     url: '/oauth/authorize',
  //     method: 'GET',
  //     status: 302,
  //     response: {}
  //   }).as('postLogin');

  //   cy.get('[for="apiUri"]').click();
  //   cy.focused().type('http://syndesis-server-syndesis.192.168.64.5.nip.io');
  //   cy.get('[for="authUri"]').click();
  //   cy.focused().type('https://192.168.64.5:8443/oauth/authorize').type('{enter}');

  //   cy.wait('@postLogin');
  // });



});
