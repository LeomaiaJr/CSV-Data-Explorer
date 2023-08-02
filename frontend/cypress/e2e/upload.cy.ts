describe('CSV File Upload', () => {
  it('should upload CSV file successfully', () => {
    const fileName = 'sample.csv';
    const filePath = `${__dirname}/assets/${fileName}`;

    cy.visit('http://127.0.0.1:5173/');

    cy.get('[data-testid="upload-button"]').should('be.disabled');

    cy.get('.drag-n-drop').selectFile(
      {
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'file.txt',
        lastModified: Date.now(),
      },
      {
        action: 'drag-drop',
      }
    );
    cy.contains('Invalid file extension, only .csv files are accepted').should(
      'be.visible'
    );

    cy.get('.drag-n-drop').selectFile(filePath, {
      action: 'drag-drop',
    });
    cy.contains(fileName).should('be.visible');
    cy.get('[data-testid="upload-button"]').click();

    cy.contains('File uploaded successfully', { timeout: 3000 }).should(
      'be.visible'
    );
    cy.contains('Search data on file:').should('be.visible');

    cy.get('[data-testid="delete-file"]').click();
    cy.contains(fileName).should('not.exist');
  });
});
