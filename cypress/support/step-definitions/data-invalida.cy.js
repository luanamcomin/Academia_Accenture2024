import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given ('que estou na página home', () => {
    cy.visit('/')
})

And ('seleciono a aba Automobile', () => {
    cy.clickAutomobile()
})

When ('preencho os dados do veículo com data superior a de hoje', () => {
    cy.preencherDataInvalida()
})

Then ('deve aparecer uma mensagem de erro {string}', (dateErro) => {
    Cypress.env('dateErro', dateErro)
    cy.spanError(dateErro)
})