const BTN_AUTOMOBILE = '#nav_automobile'

Cypress.Commands.add('clickAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})