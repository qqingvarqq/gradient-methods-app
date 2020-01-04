module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.scenario\\.js$',
  setupFilesAfterEnv: ['./setup-e2e-jest-settings.js'],
}