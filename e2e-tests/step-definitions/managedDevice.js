const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^User back to homepage$/, () => {
    return client.url('https://qa-xswift.xapiens.id/')
    .pause(2000)
});

When(/^I open menu managed device$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div[9]/a/div')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div[9]/a/div')
    .pause(5000)
  });

Then(/^Success Open Menu Managed Device$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="menu-title"]`)
    .assert.elementPresent('//*[@id="menu-title"]')
    .pause(2000)
});

Given(/^I on sub menu List User Assignment$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div/div/div[1]/div/div[2]/div[1]/span`)
    .assert.elementPresent('/html/body/div/div/div[1]/div/div[2]/div[1]/span');
});

When(/^I search company name with '(.*?)' and show detail company$/, (companyName) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="search-input-main-list"]')
    .setValue(`//input[@id="search-input-main-list"]`, companyName)
    .pause(2000)
    .keys('\uE007')
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[1]')
    .click('//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[1]')
    .pause(2000)
  });

When(/^Export to excel Assigned Devices$/, () => {
    return client
    .useXpath()
    .click('//button[@id="dropdown-basic"]')
    .pause(2000)
    .click('//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div[1]/div/div/div/div/a[2]')
    .keys('\uE007')
  });

Then(/^Success export data$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[2]/div/div[3]`)
    .assert.elementPresent('/html/body/div[2]/div/div[3]')
    .click('/html/body/div[2]/div/div[4]/div/button')
});

Given(/^I on detail company$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div[1]/div`)
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div[1]/div');
});

When(/^Export to excel Not - Assigned Devices$/, () => {
    return client
    .useXpath()
    .click('//button[@id="dropdown-basic"]')
    .pause(2000)
    .click('//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div[1]/div/div/div/div/a[3]')
    .pause(1000)
    .keys('\uE007')
  });

Given(/^I on sub menu Computer Health Statistic$/, () => {
    return client.url('https://qa-xswift.xapiens.id/managed-device')
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[1]/div/div[2]/div[2]`)
    .assert.elementPresent('//*[@id="root"]/div/div[1]/div/div[2]/div[2]')
    .click('//*[@id="root"]/div/div[1]/div/div[2]/div[2]')
    .pause(2000)
});

When(/^I show detail company '(.*?)'$/, (companyName) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="search-input-main-list"]')
    .setValue(`//input[@id="search-input-main-list"]`, companyName)
    .pause(2000)
    .keys('\uE007')
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[1]')
    .click('//*[@id="root"]/div/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[1]')
    .pause(2000)
  });

Then(/^Show detail matrics$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div[2]/div/div[1]`)
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div[2]/div/div[1]')
});

When(/^I click see details Non - Standard Devices$/, () => {
    return client
    .useXpath()
    .click('//*[@id="root"]/div/div[2]/div[2]/div/div[1]/div[1]/div/span[2]')
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div[2]/div/div`)
    .pause(3000)
});

When(/^Export the data$/, () => {
    return client
    .useXpath()
    .click('//*[@id="root"]/div/div[2]/div[2]/div/div/div[1]/div/button')
    .pause(3000)
});

Then(/^Export success$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[2]/div`)
    .assert.elementPresent('/html/body/div[2]/div')
    .keys('\uE007')
});

When(/^I click see details on Devices With Anomalies$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div[1]/div/span[2]`)
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div[1]/div/span[2]')
    .click('//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div[1]/div/span[2]')
    .pause(2000)
});

When(/^I choose sub menu Computer Inventory$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[1]/div/div[2]/div[3]`)
    .assert.elementPresent('//*[@id="root"]/div/div[1]/div/div[2]/div[3]')
    .click('//*[@id="root"]/div/div[1]/div/div[2]/div[3]')
    .pause(2000)
});

Then(/^Show List of Computer Inventory$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div[2]/div/div`)
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div[2]/div/div')
});
