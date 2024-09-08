const BTN_NEXT3 = '#nextselectpriceoption'

const LBL_START_DATE = '#startdate'
const LBL_INSURANCE_SUM = '#insurancesum'
const LBL_MARIT_RATING = '#meritrating'
const LBL_DAMEGE_INSURANCE = '#damageinsurance'
const SLC_OPTIONAL_PRODUCTS = 'input[id="EuroProtection"]'
const LBL_COURTESY_CAR= '#courtesycar'

Cypress.Commands.add('preencherProduto', () => {
    cy.get(LBL_START_DATE).type('12/17/2024')
    cy.get(LBL_INSURANCE_SUM).select('7.000.000,00')
    cy.get(LBL_MARIT_RATING).select('Bonus 6')
    cy.get(LBL_DAMEGE_INSURANCE).select('Full Coverage')
    cy.get(SLC_OPTIONAL_PRODUCTS).check({ force: true })
    cy.get(LBL_COURTESY_CAR ).select('Yes')
})

Cypress.Commands.add('clicarNext3', () => {
    cy.get(BTN_NEXT3).click()
})

