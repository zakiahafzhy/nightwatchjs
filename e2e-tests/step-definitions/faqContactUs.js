const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^I already login$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div[2]/div/div`)
    .assert.elementPresent('//*[@id="root"]/div[2]/div/div');
    }
);

When(/^I click icon FAQ on homepage$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//a[@href="/faq"]`)
    .click(`//a[@href="/faq"]`)
});

Then(/^Show list FAQ$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="k-panelbar-item-default-.0"]/span`)
    .assert.elementPresent('//*[@id="k-panelbar-item-default-.0"]/span');
});

Given(/^I on FAQ Page$/, () => {
    return client	
    .useXpath()	
    .waitForElementPresent(`//*[@id="k-panelbar-item-default-.0"]/span`)	
    .assert.elementPresent('//*[@id="k-panelbar-item-default-.0"]/span');	
});

When(/^I click button Contact Us$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div[2]/div[2]/div[2]/button`)
    .click(`//*[@id="root"]/div[2]/div[2]/div[2]/button`)
});

Then(/^Show pop up contact us$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div`)
    .assert.elementPresent('/html/body/div[3]/div/div');
});

Given(/^Pop up contact us already Show$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div`)
    .assert.elementPresent('/html/body/div[3]/div/div');
});

When(/^I didn't fill any field and click button Submit$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[7]/button[2]`)
    .click(`/html/body/div[3]/div/div/div[2]/form/div[7]/button[2]`)
});

Then(/^will show warning required$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[1]/div/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[2]/form/div[1]/div/p')
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[3]/div/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[2]/form/div[3]/div/p')
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[4]/div/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[2]/form/div[4]/div/p')
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[5]/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[2]/form/div[5]/p')
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[6]/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[2]/form/div[6]/p');
});

When(/^user choose Full Name with '(.*?)'$/, (fullName) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="fullname"]')
    .getValue('xpath',`//input[@id="fullname"]`,function(value1){
    srcode = value1.value;
    client.setValue(`//input[@id="fullname"]`, fullName)
    .pause(3000)
    .keys('\uE007')
    })
    .assert.containsText('//div[@id="fullname"]', 'Yani Iriana Putri - XAPIENS')
});

When(/^user input Mobile Phone Number '(.*?)'$/, (phoneNumber) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="phone"]')
    .getValue('xpath', `//input[@id="phone"]`, function(value1){
    srcode = value1.value;
    client.setValue(`//input[@id="phone"]`, phoneNumber)
    })
});	

When(/^user choose Topic with '(.*?)'$/, (topic) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="topic"]')
    .getValue('xpath', `//input[@id="topic"]`, function(value1){
    srcode = value1.value;
    client.setValue(`//input[@id="topic"]`, topic)	
    .keys('\uE007')	
    })	
});	
	
When(/^user fill Message with '(.*?)'$/, (message) => {	
    return client	
    .useXpath()	
    .waitForElementPresent('//textarea[@id="message"]')	
    .getValue('xpath', `//textarea[@id="message"]`, function(value1){	
    srcode = value1.value;	
    client.setValue(`//textarea[@id="message"]`, message)	
    })	
});	

When(/^user upload file with '(.*?)'$/, (fileUpload) => {
    if (fileUpload == 'Correct File'){
        fileUpload= '/files/qa.png';
    }
    if (fileUpload == 'Incorrect Size File'){
        fileUpload='/files/incorrectsizefile.png';
    }
    
    return client
    .useXpath()	
    .waitForElementPresent('//input[@id="attachment_file"]')	
    .getValue('xpath', `//input[@id="attachment_file"]`, function(value1){	
    srcode = value1.value;	
    client.setValue(`//input[@id="attachment_file"]`, require('path').resolve(__dirname + fileUpload))	
    })	
});	

When(/^click button submit$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[7]/button[2]`)
    .click(`/html/body/div[3]/div/div/div[2]/form/div[7]/button[2]`)
    .pause(2000)
});

Then(/^show pop up successfully submit$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="swal2-title"]`)
    .assert.elementPresent('//*[@id="swal2-title"]')
    .click(`/html/body/div[2]/div/div[6]/button[3]`)
});

Then(/^will show warning file more than 2MB$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[6]/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[2]/form/div[6]/p')
});