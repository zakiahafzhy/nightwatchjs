const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user already on master data menu$/, () => {
    return client.url('https://qa-xswift.xapiens.id/master-data')   
    .pause(1000)
});

When(/^user click sub menu Services$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[1]/div[3]')
    .click('//*[@id="root"]/div[2]/div/div/div[1]/div[3]')
    .pause(1000)
});

Then(/^will show list of services$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]')
    .pause(1000)
});

Given(/^user already on sub menu services$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]') 
    .pause(1000)
});

When(/^user click detail service$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/button')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/button')
    .pause(1000)
});

Then(/^will show detail service$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button')
    .pause(1000)
    .click(`/html/body/div[3]/div/div/div/div[2]/form/div[5]/button`)
    .pause(1000)
});