const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '3xm9hv',
  pageLoadTimeout:90000,
    chromeWebSecurity: false,
    responseTimeout: 120e3,
    defaultCommandTimeout: 90000,
    requestTimeout: 90000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videoUploadOnPasses: true,
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
