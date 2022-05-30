const fs = require('fs')
require('dotenv').config();

// const path = require('path')
const { setDefaultTimeout, After, AfterAll, BeforeAll } = require('cucumber')
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots,
} = require('nightwatch-api')
const reporter = require('cucumber-html-reporter')
// TEMP
const {CucumberRailClient} = require ("testrail-integration");
const runid = process.env.TESTRAIL_RUNID;
const version = "Test"
const options = {
  username: "#",
  password: "#",
  url: "#"
};
const testrail = new CucumberRailClient(options);
// TEMP

setDefaultTimeout(60000)

BeforeAll(async () => {
  await startWebDriver({ env: process.env.ENV_BROWSER })
  await createSession()
})

AfterAll(async () => {
  await closeSession()
  await stopWebDriver()
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'e2e-tests/report/cucumber_report.json',
      output: 'e2e-tests/report/cucumber_report.html',
      junit: 'e2e-tests/report/cucumber_report.xml',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'POC',
      },
    })
  }, 1000)
})

After(function () {
  getNewScreenshots().forEach((file) => this.attach(fs.readFileSync(file), 'image/png'))
})
After(async (scenario) => {
  try {
    await testrail.updateTestRailResults(scenario, runid, version);
  } catch (err) {
    console.log("Error " + err);
  }
})