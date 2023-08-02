describe('CSV Data Explorer App', () => {
  it('should open the home page successfully', () => {
    const fileName = 'sample.csv';
    const filePath = `${__dirname}/assets/${fileName}`;

    cy.visit('http://127.0.0.1:5173/');

    cy.get('.drag-n-drop').selectFile(filePath, {
      action: 'drag-drop',
    });
    cy.contains(fileName).should('be.visible');
    cy.get('[data-testid="upload-button"]').click();

    cy.contains('Search data on file:', { timeout: 3000 }).should('be.visible');

    cy.get('[data-testid="search-field"]').type('john');
    cy.get('[data-testid="search-button"]').click();

    cy.get('[data-testid="data-grid"]', { timeout: 3000 }).should('be.visible');
    cy.get('[data-testid="data-grid"] > div', { timeout: 3000 }).should(
      'have.length',
      2
    );

    cy.contains('Mike Johnson').should('be.visible');
    cy.contains('John Doe').should('be.visible');
  });
});
