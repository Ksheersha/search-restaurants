
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: './e2e-tests/screenshots',
    filename: 'my-report.html'
});

exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',
    plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: './e2e-tests/screenshots',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'none',
        withLogs: 'true',
        writeReportFreq: 'asap',
        imageToAscii: 'failure',
        clearFoldersBeforeTest: true
    }],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
      showColors: true
  },
    onPrepare: function() {
        return global.browser.getProcessedConfig().then(function(config) {
        });
    }
};
