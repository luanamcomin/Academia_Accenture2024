const BTN_NEXT4 = '#nextsendquote'

const SLC_OPTION = ':nth-child(3) > .ideal-radio'


Cypress.Commands.add('selecionarPreco', () => {
    cy.get(SLC_OPTION).click({ force: true })
})

Cypress.Commands.add('clicarNext4', () => {
    cy.get(BTN_NEXT4).click()
})