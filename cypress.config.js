const { defineConfig } = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    responseTimeout: 120e3,
    defaultCommandTimeout: 60000,
    requestTimeout: 80000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    videoUploadOnPasses: false,
    env: {
        cookies: false,
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-grep/src/plugin')(on, config)
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        baseUrl: 'https://www.tutorialspoint.com/html/html_iframes.htm',
    },
})
