const BTN_SEND = '#sendemail'

const LBL_EMAIL = '#email'
const LBL_PHONE = '#phone'
const LBL_USERNAME = '#username'
const LBL_PASSWORD = '#password'
const LBL_CONF_PASSWORD = '#confirmpassword'

const LBL_CONFIRM = 'h2'
const MDL_LODING = '#LoadingPDF'


Cypress.Commands.add('preencherOrcamento', () => {
    cy.get(LBL_EMAIL).type(Cypress.env('email'), {log: false})
    cy.get(LBL_PHONE).type(Cypress.env('telefone'), {log: false})
    cy.get(LBL_USERNAME).type(Cypress.env('usuario'), {log: false})
    cy.get(LBL_PASSWORD).type(Cypress.env('senha'), {log: false})
    cy.get(LBL_CONF_PASSWORD).type(Cypress.env('senha'), {log: false})
})

Cypress.Commands.add('clicarSend', () => {
    cy.get(BTN_SEND).click()
})

Cypress.Commands.add('validarEnvio', () => {
    const mensagem = Cypress.env('mensagem')

    cy.get(MDL_LODING, { timeout: 12000 }).should('not.exist')
    cy.get(LBL_CONFIRM).should('contain.text', mensagem)
});
