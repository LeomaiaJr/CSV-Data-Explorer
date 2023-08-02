describe('CSV Data Explorer App', () => {
  it('should open the home page successfully', () => {
    cy.visit('http://127.0.0.1:5173/');
    
    cy.contains('CSV Data Explorer').should('be.visible');
  });
});
