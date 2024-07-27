describe('can edit tasks', () => {
  it('should be possible to edit a task', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('+').click();
    cy.get('label').contains(/title/i).type('Buy some bread');
    cy.get('label')
      .contains(/description/i)
      .type('Try to get those nice ciabatta rolls');
    cy.get('select').select('shopping');
    cy.contains(/save/i).click();
    cy.get('.TaskList').eq(0).click();
    cy.get('input[name=title]').should('have.value', 'Buy some bread');
    cy.get('textarea[name=description]').should(
      'have.value',
      'Try to get those nice ciabatta rolls'
    );
    cy.get('select[name=context]').should('have.value', 'shopping');
    cy.get('input[name=title]').clear().type('Call workshop');
    cy.get('textarea[name=description]').clear().type('Get new carb fitted');
    cy.get('select[name=context]').select('phone');
    cy.contains(/save/i).click();
    cy.get('h2').eq(0).should('have.text', 'Phone');
    cy.get('.TaskList')
      .eq(0)
      .find('.Task .Task-title')
      .contains('Call workshop')
      .should('be.visible');
    cy.get('.TaskList')
      .eq(0)
      .find('.Task .Task-description')
      .contains('Get new carb fitted')
      .should('be.visible');
    cy.get('h2').should('have.length', 1);
    cy.contains('+').click();
    cy.get('label').contains(/title/i).type('Call tree man');
    cy.get('label')
      .contains(/description/i)
      .type('See if he can make Thursday');
    cy.get('select').select('phone');
    cy.contains(/save/i).click();
    cy.get('h2').eq(0).should('have.text', 'Phone');
    cy.get('h2').should('have.length', 1);
    cy.get('.TaskList')
      .find('.Task .Task-title')
      .eq(0)
      .contains('Call workshop')
      .should('be.visible');
    cy.get('.TaskList')
      .find('.Task .Task-description')
      .eq(0)
      .contains('Get new carb fitted')
      .should('be.visible');
    cy.get('.TaskList')
      .find('.Task .Task-title')
      .eq(1)
      .contains('Call tree man')
      .should('be.visible');
    cy.get('.TaskList')
      .find('.Task .Task-description')
      .eq(1)
      .contains('See if he can make Thursday')
      .should('be.visible');
  });
});
