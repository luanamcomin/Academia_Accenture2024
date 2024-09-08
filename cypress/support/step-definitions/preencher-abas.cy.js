import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given ('que estou na página home', () => {
    cy.visit('/')
})

And ('seleciono a aba Automobile', () => {
    cy.clickAutomobile()
})

And ('preencho os dados do veículo', () => {
    cy.preencherVeiculo()
})

And ('clico em Next para informações do seguro', () => {
    cy.clicarNext1()
})

And ('preencho as informações do seguro', () => {
    cy.preencherSeguro()
})

And ('clico em Next para informações do produto', () => {
    cy.clicarNext2()
})

And ('preencho as informações do produto', () => {
    cy.preencherProduto()
})

And ('clico em Next para opção de preço', () => {
    cy.clicarNext3()
})

And ('seleciono a opção de preço', () => {
    cy.selecionarPreco()
})

And ('clico em Next para informações do orçamento', () => {
    cy.clicarNext4()
})

And ('preencho as informações do orçamento', () => {
    cy.preencherOrcamento()
})

When ('clico em Send', () => {
    cy.clicarSend()
})


Then ('Deve aparecer a mensagem {string}', (mensagem) => {
    Cypress.env('mensagem', mensagem)
    cy.validarEnvio(mensagem)
})

