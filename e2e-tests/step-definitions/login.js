const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const fs = require('fs');

Given(/^I visit EMI page$/, () => {
    return client
    .useXpath()
    .maximizeWindow()
    .url('https://emifront:TinCn54KkL@frontend-dev.electramobilitas.id/')
    .pause(5000)
    .waitForElementPresent(`//*[@id="hero"]/div[1]`)
    .assert.containsText(`//*[@id="hero"]/div[1]`,`BE A PART OF FUTURE MOBILITY`);
});
Given(/^I am on EMI page with logged in account$/, () => {
    return client
    .useXpath()
    .url('https://frontend-dev.electramobilitas.id/')
    .pause(5000)
    .waitForElementPresent(`//*[@id="hero"]/div[1]`)
    .assert.containsText(`//*[@id="hero"]/div[1]`,`BE A PART OF FUTURE MOBILITY`)
    .waitForElementPresent(`//*[@id="account-navbar-btn"]/span/div[1]`);
});

When(/^I click Account header$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="account-navbar-btn"]`)
    .click(`//*[@id="account-navbar-btn"]`)
    .pause(5000);
});
Given(/^I am on login page$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="__next"]/div/div[2]/div/div[1]/div`)
    .assert.containsText(`//*[@id="__next"]/div/div[2]/div/div[1]/div`,`Login to your Account`);
});
Then(/^I should see multiple login methods$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="phoneNumber"]`)
    .waitForElementPresent(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[1]/div[1]/button/span/div`)
    .waitForElementPresent(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[2]/button[2]`);
});


Given(/^I am on sign in with phone number page$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="phoneNumber"]`);
});
When(/^I provide phone number '(.*?)' to login$/, (phone) => {
    if (phone == null) {
        phone = '';
    }
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="phoneNumber"]`)
    .getValue('xpath',`//*[@id="phoneNumber"]`,function(srcode){
        srcode = srcode.value;
        for (var i = 0; i < srcode.length; i++) {
            client.setValue(`//*[@id="phoneNumber"]`,'').keys('\ue003')
        }
    })
    .setValue(`//*[@id="phoneNumber"]`,phone)
    .waitForElementPresent(`//*[@id="submit-register"]`)
    .click(`//*[@id="submit-register"]`)
    .pause(1000);
});
Then(/^I should see sign in with phone number error '(.*?)' below phone number field$/, (phone) => {
    if (phone !== null) {
        client.waitForElementPresent(`//*[@id="phoneNumber-helper-text"]`)
        .assert.containsText(`//*[@id="phoneNumber-helper-text"]`,phone)
    }
    return client;
});

When(/^I choose to sign in with email$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[1]/div[1]/button/span/div`)
    .click(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[1]/div[1]/button/span/div`)
    .pause(1000);
});
Given(/^I am on sign in with email page$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="email"]`)
    .waitForElementPresent(`//*[@id="password"]`);
});
When(/^I provide email '(.*?)' and password '(.*?)' to login$/, (email,pass) => {
    if (email == null) {
        email = '';
    }
    if (pass == null) {
        pass = '';
    }
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="email"]`)
    .getValue('xpath',`//*[@id="email"]`,function(srcode){
        srcode = srcode.value;
        for (var i = 0; i < srcode.length; i++) {
            client.setValue(`//*[@id="email"]`,'').keys('\ue003')
        }
    })
    .setValue(`//*[@id="email"]`,email)
    .waitForElementPresent(`//*[@id="password"]`)
    .getValue('xpath',`//*[@id="password"]`,function(srcode){
        srcode = srcode.value;
        for (var i = 0; i < srcode.length; i++) {
            client.setValue(`//*[@id="password"]`,'').keys('\ue003')
        }
    })
    .setValue(`//*[@id="password"]`,pass)
    .waitForElementPresent(`//button[1]/span/div/div[2][.='Login']`)
    .click(`//button[1]/span/div/div[2][.='Login']`)
    .pause(5000);
});
Then(/^I should see sign in with email error '(.*?)' below email field and '(.*?)' below password field$/, (email,pass) => {
    if (email !== null) {
        client.waitForElementPresent(`//*[@id="email-helper-text"]`)
        .assert.containsText(`//*[@id="email-helper-text"]`,email)
    }
    if (pass !== null) {
        client.waitForElementPresent(`//*[@id="password-helper-text"]`)
        .assert.containsText(`//*[@id="password-helper-text"]`,pass)
    }
    return client;
});
Then(/^I should see notification popup '(.*?)'$/, (popup) => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="notistack-snackbar"]`)
    .assert.containsText(`//*[@id="notistack-snackbar"]`,popup);
});

When(/^I switch to main window$/, () => {
    return client
    .windowHandles(function(result) {
        client.switchWindow(result.value[0])
        .pause(1000)
    });
});
When(/^I switch to window (.*?)$/, (window) => {
    return client
    .windowHandles(function(result) {
        client.switchWindow(result.value[+window])
        .pause(1000)
    });
});