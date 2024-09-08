// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/0-home.page'
import './pages/1-vehicle-data.page'
import './pages/2-insurant-data.page'
import './pages/3-product-data.page'
import './pages/4-price-option.page'
import './pages/5-send-quote.page'
import './pages/error-date.page'

// Ignora exceções específicas do tipo "e is not defined"
Cypress.on('uncaught:exception', (err, runnable) => {
    // Se o erro contiver "e is not defined", ignora
    if (err.message.includes('e is not defined')) {
        return false;
    }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
