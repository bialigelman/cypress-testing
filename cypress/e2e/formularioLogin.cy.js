describe('Formulário de login', () => {
  beforeEach(() => cy.visit('localhost:3000'));
  it('Não deve permitir um e-mail inválido', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O email digitado é inválido');
  });
  it('Não deve permitir um campo de e-mail em branco', () =>{
    cy.getByData('botao-login').click();
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo email é obrigatório');
  })
  it('Não deve permitir um senha em branco', () =>{
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo de senha é obrigatório');
  })
});
