const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user already on sub menu company$/, () => {
    return client.url('https://qa-xswift.xapiens.id/master-data')
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[1]/div[4]')
    .click('//*[@id="root"]/div[2]/div/div/div[1]/div[4]')
    .pause(2000)
});

When(/^click button save without fill any field$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]')
    .pause(2000)
});

Then(/^show warning mandatory field$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[1]/div/div')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div/div')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[2]/div[1]/div/div')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[2]/div[2]/div/div')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[3]/div[1]/div/div')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[1]')
    .click(`/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[1]`)
    .pause(2000)
});

Given(/^pop up add new company already shown$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div')
    .pause(1000)
});


When(/^user fill field company with '(.*?)'$/, (companyName) => {
    if (companyName == null) {
        companyName = '';
    }
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="company_name"]')
    .getValue('xpath',`//input[@id="company_name"]`,function(srcode){
        srcode = srcode.value;
        for (var i = 0; i < srcode.length; i++) {
            client.setValue(`//input[@id="company_name"]`,'').keys('\ue003')
        }
    })
    .setValue(`//input[@id="company_name"]`,companyName)
    .pause(1000)
});

When(/^fill field company code with '(.*?)'$/, (companyCode) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="code"]')
    .setValue(`//input[@id="code"]`, companyCode)
    .pause(1000)
});

When(/^fill field AM name with '(.*?)'$/, (AMName) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="am_fullname"]')
    .setValue(`//input[@id="am_fullname"]`, AMName)
    .pause(1000)
});

When(/^fill field AM email with '(.*?)'$/, (AMEmail) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="am_email"]')
    .setValue(`//input[@id="am_email"]`, AMEmail)
    .pause(1000)
});

When(/^fill field director name with '(.*?)'$/, (directorName) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="director_name"]')
    .setValue(`//input[@id="director_name"]`, directorName)
    .pause(1000)
});

When(/^fill field company parent with '(.*?)'$/, (companyParent) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="parent"]')
    .setValue(`//input[@id="parent"]`, companyParent)
    .keys('\uE007')
    .pause(1000)
});

When(/^fill field approver name with '(.*?)'$/, (approverName) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="approval"][1]')
    .setValue(`//input[@id="approval"][1]`, approverName)
    .pause(1000)
});

When(/^fill field approver email with '(.*?)'$/, (approverEmail) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="approval"][2]')
    .setValue(`//input[@id="approval"][2]`, approverEmail)
    .pause(1000)
});

When(/^click button add for add approver$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[4]/div[1]/button')
    .click(`/html/body/div[3]/div/div/div/div[2]/form/div[4]/div[1]/button`)
    .pause(2000)
});

When(/^click button save for save company$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]')
    .click(`/html/body/div[3]/div/div/div/div[2]/form/div[5]/button[2]`)
    .pause(2000)
});

Then(/^successfully add company with name '(.*?)'$/, (companyNameSearch) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/table/thead/tr[2]/th[1]/div/div/input')
    .setValue(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/table/thead/tr[2]/th[1]/div/div/input`, companyNameSearch)
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr/td[1]')
    .pause(1000)
});

Then(/^show warning company name already exists$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[3]')
    .waitForElementPresent('/html/body/div[2]/div/div[4]/div/button')
    .click(`/html/body/div[2]/div/div[4]/div/button`)
    .pause(1000)
});

When(/^user click button show company$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[12]/button[1]')
    .click(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[12]/button[1]`)
    .pause(2000)
});

Then(/^will show detail company$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[5]/button')
    .click(`/html/body/div[3]/div/div/div/div[2]/form/div[5]/button`)
    .pause(1000)
});

When(/^user click edit company$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[12]/button[2]')
    .click(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[12]/button[2]`)
    .pause(2000)
});

When(/^user delete company$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[12]/button[3]')
    .click(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[12]/button[3]`)
    .pause(2000)
    .waitForElementPresent('/html/body/div[2]/div/div[4]/div[2]/button')
    .click(`/html/body/div[2]/div/div[4]/div[2]/button`)
    .pause(1000)
});

Then(/^will successfully deleted$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr/td[1]')
    .pause(1000)
});

When(/^already on list data company$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[1]')
    .pause(1000)
});