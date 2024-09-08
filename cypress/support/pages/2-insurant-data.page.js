const FIRST_NAME = '#firstname'
const LAST_NAME = '#lastname'
const DATE_BIRTH = '#birthdate'
const RDO_GENDER = 'input[id="genderfemale"]'
const ADDRESS = '#streetaddress'
const COUNTRY = '#country'
const ZIP_CODE = '#zipcode'
const CITY= '#city'
const OCUPPATION = '#occupation'

const SLC_HOBBIES = 'input[id="other"]'

const BTN_NEXT2 = '#nextenterproductdata'


Cypress.Commands.add('preencherSeguro', () => {
    cy.get(FIRST_NAME ).type(Cypress.env('primeiro-nome'), {log: false})
    cy.get(LAST_NAME ).type(Cypress.env('sobrenome'), {log: false})
    cy.get(DATE_BIRTH).type(Cypress.env('data_nascimento'), {log: false})
    cy.get(RDO_GENDER).check({force: true})
    cy.get(ADDRESS).type(Cypress.env('endereco'), {log: false})
    cy.get(COUNTRY).select('Brazil')
    cy.get(ZIP_CODE).type(Cypress.env('CEP'), {log: false})
    cy.get(CITY).type(Cypress.env('cidade'), {log: false})
    cy.get(OCUPPATION).select('Public Official')
    
    cy.get(SLC_HOBBIES).check({ force: true })
})

Cypress.Commands.add('clicarNext2', () => {
    cy.get(BTN_NEXT2).click()
})

