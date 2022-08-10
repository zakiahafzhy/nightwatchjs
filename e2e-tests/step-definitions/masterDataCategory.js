const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user already on sub menu category$/, () => {
    return client.url('https://qa-xswift.xapiens.id/master-data')
    .useXpath()
    .waitForElementPresent ('//*[@id="root"]/div[2]/div/div/div[1]/div[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[1]/div[2]')
    .pause(1000)
});

When(/^fill Category Name with '(.*?)'$/, (categoryName) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input')
    .setValue(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input`, categoryName)
    .pause(1000)
});

When(/^choose Product Type Name$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[2]/span/span/span[1]')
    .click(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[2]/span/span/span[1]`)
    .pause(1000)
    .keys('\uE007')
});

When(/^click Save category$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[7]/button[1]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[7]/button[1]')    
    .pause(1000)
});

Then(/^success save category$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]')
});

Then(/^will show warning duplicate category name$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[3]')
    .keys('\uE007')
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[7]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[7]/button[2]')
    .pause(1000)
});

When(/^user click edit on data$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[7]/button[1]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[7]/button[1]')    
    .pause(1000)
});

When(/^change Category Name with '(.*?)'$/, (categoryNameEdited) => {
    if (categoryNameEdited == null) {
        categoryNameEdited = '';
    }
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input')
    .getValue('xpath',`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input`,function(srcode){
    srcode = srcode.value;
    for (var i = 0; i < srcode.length; i++) {
        client.setValue(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input`,'').keys('\ue003')
    }
    })
    .setValue(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input`,categoryNameEdited)
    .pause(2000)
});

When(/^user click delete on data and confirm ok to delete$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[7]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[7]/button[2]')    
    .pause(2000)
    .click('/html/body/div[2]/div/div[4]/div[2]/button')
    .pause(1000)
});

Then(/^success create new category$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]')
});