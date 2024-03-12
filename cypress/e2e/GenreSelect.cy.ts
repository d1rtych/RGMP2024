describe('GenreSelect Component Testing', () => {
  it('Correctly selects a genre', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('Crime').click()
    cy.get('[data-cy=genre-option]').should('have.class', 'selected')
  });
});
