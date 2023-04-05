describe('Jornadas de usuário', () => {
  it('Deve permitir qyue a pessoa usuária acesse a aplicação, realize uma transação e faça logout', () => {
    cy.visit('/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('bialigelman@gmail.com');
    cy.getByData('senha-input').type('123456789');
    cy.getByData('botao-enviar').click();
    cy.location('pathname').should('eq', '/home');
    cy.getByData('select-opcoes').select('Transferência')
    cy.getByData('form-input').type('80')
    cy.getByData('realiza-transacao').click();
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');
    cy.getByData('botao-sair').click();

  });
});