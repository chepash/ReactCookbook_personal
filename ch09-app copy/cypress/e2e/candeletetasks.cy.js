describe('can delete tasks', () => {
  it('should be possible to delete a task', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('+').click();
    cy.get('label').contains(/title/i).type('Buy some bread');
    cy.get('label')
      .contains(/description/i)
      .type('Try to get those nice ciabatta rolls');
    cy.get('select').select('shopping');
    cy.contains(/save/i).click();
    cy.contains('+').click();
    cy.get('label').contains(/title/i).type('Call workshop');
    cy.get('label')
      .contains(/description/i)
      .type('Get new carb fitted');
    cy.get('select').select('phone');
    cy.contains(/save/i).click();
    cy.contains(/yes/i).should('not.exist');
    cy.get('.TaskList').eq(0).find('.Task [title="Delete"]').click();
    cy.get('.Modal').contains(/no/i).click();
    cy.get('.Modal').should('not.exist');
    cy.get('.TaskList').eq(0).find('.Task [title="Delete"]').click();
    cy.contains(/yes/i).click();
    cy.contains(/yes/i).should('not.exist');
    cy.get('h2').eq(0).should('have.text', 'Shopping');
    cy.get('.TaskList')
      .eq(0)
      .find('.Task .Task-title')
      .contains('Buy some bread')
      .should('be.visible');
    cy.get('.TaskList')
      .eq(0)
      .find('.Task .Task-description')
      .contains('Try to get those nice ciabatta rolls')
      .should('be.visible');
  });
});
