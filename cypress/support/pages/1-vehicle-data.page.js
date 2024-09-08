const BTN_NEXT1 = '#nextenterinsurantdata'

const LBL_MAKE = '#make'
const LBL_PERFORMANCE = '#engineperformance'
const DATE_MANUFACTURE = '#dateofmanufacture'
const LBL_NUMBER_SEATS = '#numberofseats'
const LBL_FUEL_TYPE = '#fuel'
const LBL_PRICE = '#listprice'
const LBL_LICENCE = '#licenseplatenumber'
const LBL_ANNUAL_MILEAGE = '#annualmileage'


Cypress.Commands.add('preencherVeiculo', () => {
    cy.get(LBL_MAKE).select('BMW')
    cy.get(LBL_PERFORMANCE ).type('250')
    cy.get(DATE_MANUFACTURE).type(Cypress.env('data_fabricacao'), {log: false})
    cy.get(LBL_NUMBER_SEATS).select('5')
    cy.get(LBL_FUEL_TYPE).select('Petrol')
    cy.get(LBL_PRICE ).type('60000')
    cy.get(LBL_LICENCE ).type(Cypress.env('placa'), {log: false})
    cy.get(LBL_ANNUAL_MILEAGE ).type('12000')
})

Cypress.Commands.add('clicarNext1', () => {
    cy.get(BTN_NEXT1).click()
})

