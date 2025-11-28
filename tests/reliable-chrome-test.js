// tests/reliable-chrome-test.js

const { By, until } = require('selenium-webdriver');
const { createChromeDriver } = require('../config/webdriver-simple-config');
const assert = require('assert');

describe('Login exitoso en SauceDemo usando Selenium Grid', function () {
    this.timeout(30000); // aumentamos el timeout a 30s

    let driver;

    before(async function () {
        driver = await createChromeDriver();
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it('Debería iniciar sesión correctamente con standard_user / secret_sauce', async function () {
        // 1. Ir a la página
        await driver.get('https://www.saucedemo.com/');

        // 2. Localizar campos y botón
        const usernameInput = await driver.findElement(By.id('user-name'));
        const passwordInput = await driver.findElement(By.id('password'));
        const loginButton = await driver.findElement(By.id('login-button'));

        // 3. Escribir credenciales
        await usernameInput.sendKeys('standard_user');
        await passwordInput.sendKeys('secret_sauce');

        // 4. Clic en login
        await loginButton.click();

        // 5. Esperar que cargue el inventario
        await driver.wait(
            until.elementLocated(By.className('inventory_list')),
            10000
        );

        // 6. Validar URL
        const currentUrl = await driver.getCurrentUrl();
        assert.ok(
            currentUrl.includes('inventory.html'),
            `La URL actual no es la esperada. URL actual: ${currentUrl}`
        );
    });
});
