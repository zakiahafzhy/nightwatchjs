const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

When(/^user click sub menu department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[1]/div[8]')
    .click('//*[@id="root"]/div[2]/div/div/div[1]/div[8]')
    .pause(1000)
});

Then(/^will show list of department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div')
    .pause(1000)
});

Given(/^user already on sub menu department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[1]/p')
    .pause(1000)
});

When(/^user click button add new department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/button[2]')
    .pause(1000)
});

When(/^click button save add department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[4]/button[2]')
    .click('/html/body/div[3]/div/div/div/div[2]/form/div[4]/button[2]')
    .pause(1000)
});

Then(/^will show warning mandatory field add department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[1]/div/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[2]/div[1]/div/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[2]/div[2]/div/p[2]')
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[4]/button[1]')
    .click(`/html/body/div[3]/div/div/div/div[2]/form/div[4]/button[1]`)
    .pause(1000)
});

When(/^fill company department with '(.*?)'$/, (companyDepartment) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="company_name"]')
    .setValue(`//input[@id="company_name"]`, companyDepartment)
    .keys('\uE007')
    .pause(1000)
});

When(/^fill department code with '(.*?)'$/, (departmentCode) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="department_code"]')
    .setValue(`//input[@id="department_code"]`, departmentCode)
    .pause(1000)
});

When(/^fill department head name with '(.*?)'$/, (departmentCHead) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="department_head"]')
    .setValue(`//input[@id="department_head"]`, departmentCHead)
    .pause(1000)
});

When(/^fill department name with '(.*?)'$/, (departmentName) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="department_name"]')
    .setValue(`//input[@id="department_name"]`, departmentName)
    .pause(1000)
});

When(/^add approver name department with '(.*?)'$/, (approverDeptName) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="approval"][1]')
    .setValue(`//input[@id="approval"][1]`, approverDeptName)
    .pause(1000)
});

When(/^add email approver department with '(.*?)'$/, (approverDeptEmail) => {
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="approval"][2]')
    .setValue(`//input[@id="approval"][2]`, approverDeptEmail)
    .pause(1000)
    .waitForElementPresent('/html/body/div[3]/div/div/div/div[2]/form/div[3]/div[1]/button')
    .click(`/html/body/div[3]/div/div/div/div[2]/form/div[3]/div[1]/button`)
    .pause(1000)
});

Then(/^successfully add department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});

Then(/^show warning duplicate department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[3]')
    .waitForElementPresent ('/html/body/div[2]/div/div[4]/div/button')
    .click(`/html/body/div[2]/div/div[4]/div/button`)
    .pause(1000)
});

When(/^user click icon see detail$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[10]/button[1]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[10]/button[1]')
    .pause(1000)
});

Then(/^will show detail department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="contained-modal-title-vcenter"]')
    .pause(1000)
    .waitForElementPresent ('/html/body/div[4]/div/div/div/div[2]/form/div[4]/button')
    .click(`/html/body/div[4]/div/div/div/div[2]/form/div[4]/button`)
    .pause(1000)
});

When(/^user click icon edit department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[10]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[10]/button[2]')
    .pause(1000)
});

When(/^edit company department head name with '(.*?)'$/, (departmentCHeadEdit) => {
    if (departmentCHeadEdit == null) {
        departmentCHeadEdit = '';
    }
    return client
    .useXpath()
    .waitForElementPresent ('//input[@id="department_head"]')
    .getValue('xpath',`//input[@id="department_head"]`,function(srcode){
        srcode = srcode.value;
        for (var i = 0; i < srcode.length; i++) {
            client.setValue(`//input[@id="department_head"]`,'').keys('\ue003')
        }
    })
    .setValue(`//input[@id="department_head"]`,departmentCHeadEdit)
    .pause(1000)
});

When(/^click button save edit department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[4]/div/div/div/div[2]/form/div[4]/button[2]')
    .click('/html/body/div[4]/div/div/div/div[2]/form/div[4]/button[2]')
    .pause(1000)
});

When(/^user click icon delete department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[10]/button[3]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[10]/button[3]')
    .pause(1000)
    .waitForElementPresent('/html/body/div[2]/div/div[4]/div[2]/button')
    .click('/html/body/div[2]/div/div[4]/div[2]/button')
    .pause(1000)
});

Then(/^successfully delete department$/, () => {
    return client
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
    .pause(1000)
});