const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

When(/^user click sub menu contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[1]/div[7]')
    .click('//*[@id="root"]/div[2]/div/div/div[1]/div[7]')
    .pause(1000)
});

Then(/^will show list of contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});

Given(/^user already on sub menu contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});

When(/^user click button add new contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/button[2]')
    .pause(1000)
});

When(/^click button save contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div')
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]')
    .pause(1000)
});

Then(/^will show warning field add new contract required$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[1]/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[2]/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[3]/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[4]/p[2]')
    .pause(1000)
});

Given(/^pop up add new contract already shown$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div')
    .pause(1000)
});

When(/^user fill company contract with '(.*?)'$/, (companyContract) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="aria-example-input"]')
    .setValue(`//input[@id="aria-example-input"]`, companyContract)
    .keys('\uE007')
    .pause(1000)
});

When(/^fill contract number with '(.*?)'$/, (contractNo) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="contract_no"]')
    .setValue(`//input[@id="contract_no"]`, contractNo)
    .pause(1000)
});

When(/^choose contract start '(.*?)'$/, (contractStart) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="start_date"]')
    .setValue(`//input[@id="start_date"]`, contractStart)
    .keys('\uE007')
    .pause(1000)
});

When(/^choose contract end '(.*?)'$/, (contractEnd) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="end_date"]')
    .setValue(`//input[@id="end_date"]`, contractEnd)
    .keys('\uE007')
    .pause(1000)
});

Then(/^will success add new contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});

When(/^click icon seen to add products on contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[9]/button[1]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[9]/button[1]')
    .pause(1000)
});

When(/^add products to contract with '(.*?)'$/, (productsContract) => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="contained-modal-title-vcenter"]')
    .waitForElementPresent('//input[@id="product_name"]')
    .setValue(`//input[@id="product_name"]`, productsContract)
    .keys('\uE007')
    .pause(1000)
});

When(/^fill quantity product with '(.*?)'$/, (qtyProduct) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="qty"]')
    .setValue(`//input[@id="qty"]`, qtyProduct)
    .pause(1000)
});

When(/^fill rates with '(.*?)'$/, (rates) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="rates"]')
    .setValue(`//input[@id="rates"]`, rates)
    .pause(1000)
});

When(/^fill discount product with '(.*?)'$/, (discount) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="discount"]')
    .setValue(`//input[@id="discount"]`, discount)
    .pause(1000)
});

When(/^click button add products to contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[4]/div/button')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[4]/div/button')
    .pause(1000)
});


When(/^click button save add product to contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[6]/button[2]')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[6]/button[2]')
    .pause(1000)
});

Then(/^will success add product to contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[9]/button[1]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[9]/button[1]')
    .pause(1000)
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[5]/div/div[2]/div/div[1]/table/tbody/tr/td[1]')
    .pause(1000)
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[6]/button[1]')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[6]/button[1]')
    .pause(1000)
});

Then(/^will show warning contract exists$/, () => {
    return client
    .useXpath()
    .pause(1000)
    .waitForElementPresent ('/html/body/div[2]/div/div[4]/div/button')
    .click('/html/body/div[2]/div/div[4]/div/button')
    .pause(1000)
});

When(/^click button edit contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[9]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[9]/button[2]')
    .pause(1000)
});

When(/^click button save edit contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]')
    .pause(1000)
});

When(/^user click icon delete contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[9]/button[3]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[9]/button[3]')
    .pause(1000)
    .waitForElementPresent('/html/body/div[2]/div/div[4]/div[2]/button')
    .click('/html/body/div[2]/div/div[4]/div[2]/button')
    .pause(1000)
});

Then(/^contract will be successfully deleted$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});

Then(/^will success edit contract$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});