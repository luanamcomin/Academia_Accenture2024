const LBL_MAKE = '#make'
const LBL_PERFORMANCE = '#engineperformance'
const DATE_MANUFACTURE = '#dateofmanufacture'
const SPAM_DATE_ERROR = 'span.error'

Cypress.Commands.add('preencherDataInvalida', () => {
    // Adiciona 1 dia à data atual
    const dataFutura = new Date();
    dataFutura.setDate(dataFutura.getDate() + 1);

    // Formata a data no formato MM/DD/YYYY
    const dataFormatada = dataFutura.toLocaleDateString('en-US');

    cy.get(LBL_MAKE).select('BMW')
    cy.get(LBL_PERFORMANCE).type('250')
    cy.get(DATE_MANUFACTURE).type(dataFormatada)
})

Cypress.Commands.add('spanError', () => {
    const dateErro = Cypress.env('dateErro')

    cy.get(SPAM_DATE_ERROR).should('be.visible').and('contain.text', dateErro)
})
