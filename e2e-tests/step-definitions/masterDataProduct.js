const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

When(/^user click sub menu product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[1]/div[6]')
    .click('//*[@id="root"]/div[2]/div/div/div[1]/div[6]')
    .pause(1000)
});

Then(/^will show list of product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div')
    .pause(1000)
});

Given(/^user on sub menu product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div')
    .pause(1000)
});

When(/^user click button add new product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/button[2]')
    .pause(1000)
});

When(/^click button save product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]')
    .pause(1000)
});

Then(/^will show warning field required$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[1]/div/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[3]/p')
    .pause(1000)
});

Given(/^pop up add new product already show$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="contained-modal-title-vcenter"]')
    .pause(1000)
});

When(/^user fill product name with '(.*?)'$/, (productName) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="category_name"]')
    .setValue(`//input[@id="category_name"]`, productName)
    .pause(1000)
});

When(/^fill product category with '(.*?)'$/, (categoryProduct) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="categories"]')
    .setValue(`//input[@id="categories"]`, categoryProduct)
    .keys('\uE007')
    .pause(1000)
});

When(/^choose service$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="service_name 113017"]')
    .click(`//*[@id="service_name 113017"]`)
    .pause(1000)
});

Then(/^success add new product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});

When(/^user click see detail product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[8]/button[1]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[8]/button[1]')
    .pause(1000)
});

Then(/^will show detail product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="contained-modal-title-vcenter"]')
    .pause(1000)
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/div[4]/button')
    .click(`/html/body/div[3]/div/div/div/div[2]/div[4]/button`)
    .pause(1000)
});

When(/^user click edit on product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[8]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[8]/button[2]')
    .pause(1000)
});

When(/^edit product name with '(.*?)'$/, (productNameEdit) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="category_name"]')
    .setValue(`//input[@id="category_name"]`, productNameEdit)
    .pause(1000)
});

When(/^click button save product edit$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[4]/button[2]')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[4]/button[2]')
    .pause(1000)
});

Then(/^success edit product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});

When(/^user click delete on product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[8]/button[3]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[8]/button[3]')
    .pause(1000)
    .waitForElementPresent('/html/body/div[2]/div/div[4]/div[2]/button')
    .click(`/html/body/div[2]/div/div[4]/div[2]/button`)
    .pause(1000)
});

Then(/^will success delete product$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});