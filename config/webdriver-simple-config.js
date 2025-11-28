// config/webdriver-simple-config.js
const { Builder } = require('selenium-webdriver');

/**
 * Crea y retorna una instancia de WebDriver remota conectada al Selenium Grid.
 * Usaremos Chrome como navegador.
 */
async function createChromeDriver() {
    // URL del hub de Selenium (la misma que exponemos en docker-compose)
    const seleniumGridUrl = 'http://localhost:4444/wd/hub';

    const driver = await new Builder()
        .usingServer(seleniumGridUrl)   // usamos el Grid remoto, no un browser local
        .forBrowser('chrome')           // tipo de navegador
        .build();                       // construye la instancia

    return driver;
}

module.exports = {
    createChromeDriver,
};
