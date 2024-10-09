// cypress/plugin/index.ts
module.exports = (on:Cypress.PluginEvents, config:Cypress.PluginConfigOptions) => {
    const getCompareSnapshotsPlugin = require('cypress-image-diff-js')
    getCompareSnapshotsPlugin(on, config)
}