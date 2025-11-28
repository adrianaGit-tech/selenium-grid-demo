**Selenium Grid Demo**

Proyecto para ejecutar pruebas automatizadas con Selenium WebDriver utilizando un Selenium Grid desplegado en Docker.
El test se ejecuta desde Node.js y controla un navegador Chrome remoto dentro del Grid.

**Descripción del Proyecto**

- Se automatizó un login exitoso en saucedemo.com con Selenium WebDriver.

- Se desplegó un Grid con un hub y un nodo Chrome usando Docker Compose.

- El WebDriver se configuró para ejecutar el test remotamente en el nodo.

**Compatibilidad con Mac ARM**

Debido a que las imágenes de Selenium son AMD64, fue necesario añadir: **platform: linux/amd64** en ambos servicios del docker-compose.yml.

En Mac M1/M2/M4 la interfaz gráfica del Grid (/ui) puede mostrarse en blanco, pero el Grid sigue funcionando a nivel de API a través de:

**http://localhost:4444/status**

**Ejecutar el Proyecto**

- Instalar dependencias con **npm install**
 
- Levantar el Grid con **docker compose up -d**

- Ejecutar el test con **npm test**

**Archivos principales**

- config/webdriver-simple-config.js: configuración del WebDriver remoto

- tests/reliable-chrome-test.js: caso de prueba de login

- docker-compose.yml: configuración del Selenium Grid
