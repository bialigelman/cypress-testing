describe('Testando no iphone', () => {
  beforeEach(() => {
    cy.viewport(550, 750);
    cy.viewport('iphone-6', 'portrait');
    cy.visit('/');
  });
  it('Deve existir um botão menu burguer', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('bialigelman@gmail.com');
    cy.getByData('senha-input').type('123456789');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('menu-burguer').click();
    cy.getByData('menu-lateral').find('a').eq(3).click();

    cy.location('pathname').should('eq', '/home/investimentos');
  });
});
