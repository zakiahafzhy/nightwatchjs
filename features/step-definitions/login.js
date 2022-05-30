const { defineStep } = require('@wdio/cucumber-framework');

defineStep(/^I visit EMI page$/, async () => {
    await browser.maximizeWindow();
    await browser.url(`https://emifront:TinCn54KkL@frontend-dev.electramobilitas.id/`);
    await expect($(`//*[@id="hero"]/div/div[1]`)).toBeExisting();
    await expect($(`//*[@id="hero"]/div/div[1]`)).toHaveTextContaining(`INDONESIA'S FIRST FULLY CONNECTED\nE-MOTORCYCLE`);
});
defineStep(/^I am on EMI page with logged in account$/, async () => {
    await expect($(`//*[@id="hero"]/div/div[1]`)).toBeExisting();
    await expect($(`//*[@id="hero"]/div/div[1]`)).toHaveTextContaining(`INDONESIA'S FIRST FULLY CONNECTED\nE-MOTORCYCLE`);
    await expect($(`//*[@id="account-navbar-btn"]/span/div[1]`)).toBeExisting();
});
defineStep(/^I click Account header$/, async () => {
    await expect($(`#account-navbar-btn`)).toBeExisting();
    await $(`#account-navbar-btn`).click();
});

defineStep(/^I am on login with phone number page$/, async () => {
    await expect($(`#phoneNumber`)).toBeExisting();
});
defineStep(/^I provide phone number (.*) to login$/, async (phoneNo) => {
    await expect($(`#phoneNumber`)).toBeExisting();
    await $(`#phoneNumber`).setValue(phoneNo);
    await expect($(`#submit-register`)).toBeExisting();
    await $(`#submit-register`).click();
});
defineStep(/^I should see sign in with phone number error (.*) below phone number field and notification popup (.*)$/, async (field,popup) => {
    if (field.length > 0) {
        await expect($(`#phoneNumber-helper-text`)).toBeExisting();
        await expect($(`#phoneNumber-helper-text`)).toHaveTextContaining(field);
    }
    if (popup.length > 0) {
        await expect($(`#notistack-snackbar`)).toBeExisting();
        await expect($(`#notistack-snackbar`)).toHaveTextContaining(popup);
    }
});

defineStep(/^I access login with email page$/, async () => {
    await expect($(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[1]/div[1]/button`)).toBeExisting();
    await $(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[1]/div[1]/button`).click();
});
defineStep(/^I provide email (.*) and password (.*) to login$/, async (email,password) => {
    await expect($(`#email`)).toBeExisting();
    await $(`#email`).setValue(email);
    await expect($(`#password`)).toBeExisting();
    await $(`#password`).setValue(password);
    await expect($(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[2]/button[1]`)).toBeExisting();
    await $(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[2]/button[1]`).click();
});
defineStep(/^I provide login email '(.*)' and password '(.*)' to login$/, async (email,password) => {
    await expect($(`#email`)).toBeExisting();
    await $(`#email`).setValue(email);
    await expect($(`#password`)).toBeExisting();
    await $(`#password`).setValue(password);
    await expect($(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[2]/button[1]`)).toBeExisting();
    await $(`//*[@id="__next"]/div/div[2]/div/div[1]/form/div[2]/button[1]`).click();
});
defineStep(/^I should see sign in with error (.*) below email and error (.*) below password and notification popup (.*)$/, async (fieldemail,fieldpassword,popup) => {
    if (fieldemail.length > 0) {
        await expect($(`#email-helper-text`)).toBeExisting();
        await expect($(`#email-helper-text`)).toHaveTextContaining(fieldemail);
    }
    if (fieldpassword.length > 0) {
        await expect($(`#password-helper-text`)).toBeExisting();
        await expect($(`#password-helper-text`)).toHaveTextContaining(fieldpassword);
    }
    if (popup.length > 0) {
        await expect($(`#notistack-snackbar`)).toBeExisting();
        await expect($(`#notistack-snackbar`)).toHaveTextContaining(popup);
    }
});