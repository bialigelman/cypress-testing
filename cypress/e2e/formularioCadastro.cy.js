describe('Formulario de cadastro', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });
  it('Usuario deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Neilson Santos');
    cy.getByData('email-input').type('neilsonsantos@alura.com');
    cy.getByData('senha-input').type('12345678');
    cy.getByData('checkbox-input').check();
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'E-mail já cadastrado!')
  });
  
  
  
});
