const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user already on sub menu product type$/, () => {
    return client.url('https://qa-xswift.xapiens.id/master-data')
    .pause(2000)
});

When(/^user click button add new$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/button[2]')
  });

When(/^fill Product Type Name with '(.*?)' and save it$/, (productTypeName) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input')
    .setValue(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input`, productTypeName)
    .pause(2000)
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[6]/button[1]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[6]/button[1]')
    .pause(2000)
  });

Then(/^success create new product type$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
});

Then(/^show warning duplicate$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[3]')
    .keys('\uE007')
});

When(/^user click button edit$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[6]/button[1]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[6]/button[1]')
});

When(/^change product type name with '(.*?)' and save it$/, (productTypeNameEdited) => {
    if (productTypeNameEdited == null) {
        productTypeNameEdited = '';
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
    .setValue(`//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/input`,productTypeNameEdited)
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[6]/button[1]')
    .pause(2000)
});

Then(/^success edit product type name$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[1]')
});

When(/^delete product type$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[6]/button[2]')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[3]/div/div[1]/table/tbody/tr[1]/td[6]/button[2]')
    .waitForElementPresent('/html/body/div[2]/div')
    .click('/html/body/div[2]/div/div[4]/div[2]/button')
    .pause(3000)
});

Then(/^success delete product type$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div/div/div/div/div[2]')
});