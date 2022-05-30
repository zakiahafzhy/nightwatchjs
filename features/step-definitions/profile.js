const { defineStep } = require('@wdio/cucumber-framework');

defineStep(/^I access profile page$/, async () => {
    await expect($(`#account-navbar-btn`)).toBeExisting();
    await $(`#account-navbar-btn`).click();
    await expect($(`//li[.='Profile']`)).toBeExisting();
    await $(`//li[.='Profile']`).click();
});
defineStep(/^I am on profile page$/, async () => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[1]`)).toBeExisting();
    await expect($(`//*[@id="__next"]/div/div[2]/div[1]`)).toHaveTextContaining(`Profile`)
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[1]`)).toBeExisting();
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[1]`)).toHaveTextContaining(`Personal Detail`);
});

defineStep(/^I edit profile full name (.*) and choose (.*)$/, async (name,save) => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[3]/button`)).toBeExisting();
    await $(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[3]/button`).click();
    await browser.pause(1000);
    await expect($(`#name`)).toBeExisting();
    const nameValue = await $(`#name`).getValue().then((value) => {
        return value;
    });
    await $(`#name`).setValue('');
    for (i = 0; i < nameValue.length; i++) {
        await browser.keys('\uE003');
    }
    await $(`#name`).setValue(name);
    if (save == 'Y') {
        await expect($(`#submit-fullname-btn`)).toBeExisting();
        await $(`#submit-fullname-btn`).click();
    } else if (save == 'N') {
        await expect($(`#close-name-modal-btn`)).toBeExisting();
        await $(`#close-name-modal-btn`).click();
    }
});
defineStep(/^I should see profile page full name (.*)$/, async (updatedname) => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]`)).toBeExisting();
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]`)).toHaveTextContaining(updatedname);
});
defineStep(/^I edit profile birth date (.*) and choose (.*)$/, async (birth,save) => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[2]/div[2]/div/button`)).toBeExisting();
    await $(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[2]/div[2]/div/button`).click();
    await browser.pause(1000);
    await expect($(`//*[@id="edit-birthdate-modal"]/div[3]/div/div/div[2]/form/div/div[1]/div/div/input`)).toBeExisting();
    const birthValue = await $(`//*[@id="edit-birthdate-modal"]/div[3]/div/div/div[2]/form/div/div[1]/div/div/input`).getValue().then((value) => {
        return value;
    });
    await $(`//*[@id="edit-birthdate-modal"]/div[3]/div/div/div[2]/form/div/div[1]/div/div/input`).setValue('');
    for (i = 0; i < birthValue.length; i++) {
        await browser.keys('\uE003');
    }
    await $(`//*[@id="edit-birthdate-modal"]/div[3]/div/div/div[2]/form/div/div[1]/div/div/input`).setValue(birth);
    if (save == 'Y') {
        await expect($(`#submit-birthDate-btn`)).toBeExisting();
        await $(`#submit-birthDate-btn`).click();
    } else if (save == 'N') {
        await expect($(`#close-birthdate-modal-btn`)).toBeExisting();
        await $(`#close-birthdate-modal-btn`).click();
    }
});
defineStep(/^I should see profile page birth date (.*)$/, async (updatedbirth) => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[2]/div[2]`)).toBeExisting();
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[2]/div[2]`)).toHaveTextContaining(updatedbirth);
});
defineStep(/^I edit profile gender (.*) and choose (.*)$/, async (gender,save) => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[3]/div[3]/button`)).toBeExisting();
    await $(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[3]/div[3]/button`).click();
    await browser.pause(1000);
    if (gender == 'Male') {
        await expect($(`#male-gender-btn`)).toBeExisting();
        await $(`#male-gender-btn`).click();
    } else if (gender == 'Female') {
        await expect($(`#female-gender-btn`)).toBeExisting();
        await $(`#female-gender-btn`).click();
    }
    if (save == 'Y') {
        await expect($(`#submit-gender-btn`)).toBeExisting();
        await $(`#submit-gender-btn`).click();
    } else if (save == 'N') {
        await expect($(`#close-gender-modal-btn`)).toBeExisting();
        await $(`#close-gender-modal-btn`).click();
    }
});
defineStep(/^I should see profile page gender (.*)$/, async (updatedgender) => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[3]/div[2]`)).toBeExisting();
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[3]/div[2]`)).toHaveTextContaining(updatedgender);
});
defineStep(/^I click edit profile password$/, async () => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[2]/div[2]/div[3]/button`)).toBeExisting();
    await $(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[3]/div[2]/div[2]/div[3]/button`).click();
    await browser.pause(1000);
});
defineStep(/^I am on change profile password page$/, async () => {
    await expect($(`//*[@id="__next"]/div/div[2]/div[1]`)).toBeExisting();
    await expect($(`//*[@id="__next"]/div/div[2]/div[1]`)).toHaveTextContaining(`Profile`)
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[1]`)).toBeExisting();
    await expect($(`//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div[1]`)).toHaveTextContaining(`Change Password`);
});
defineStep(/^I change profile old password (.*) and choose new password (.*) and confirm new password (.*)$/, async (oldpass,newpass,confirmpass) => {
    await expect($(`#password`)).toBeExisting();
    const oldpassValue = await $(`#password`).getValue().then((value) => {
        return value;
    });
    await $(`#password`).setValue('');
    for (i = 0; i < oldpassValue.length; i++) {
        await browser.keys('\uE003');
    }
    await $(`#password`).setValue(oldpass);
    await expect($(`#newPassword`)).toBeExisting();
    const newpassValue = await $(`#newPassword`).getValue().then((value) => {
        return value;
    });
    await $(`#newPassword`).setValue('');
    for (i = 0; i < newpassValue.length; i++) {
        await browser.keys('\uE003');
    }
    await $(`#newPassword`).setValue(newpass);
    await expect($(`#retypePassword`)).toBeExisting();
    const confirmpassValue = await $(`#retypePassword`).getValue().then((value) => {
        return value;
    });
    await $(`#retypePassword`).setValue('');
    for (i = 0; i < confirmpassValue.length; i++) {
        await browser.keys('\uE003');
    }
    await $(`#retypePassword`).setValue(confirmpass);
    await expect($(`#save-document-btn`)).toBeExisting();
    await $(`#save-document-btn`).click();
});
defineStep(/^I should see edit password error (.*) below old password field and (.*) below new password field and (.*) below confirm new password field and notification popup (.*)$/, async (fieldold,fieldnew,fieldconfirm,popup) => {
    if (fieldold.length > 0) {
        await expect($(`#password-helper-text`)).toBeExisting();
        await expect($(`#password-helper-text`)).toHaveTextContaining(fieldold);
    }
    if (fieldnew.length > 0) {
        await expect($(`#newPassword-helper-text`)).toBeExisting();
        await expect($(`#newPassword-helper-text`)).toHaveTextContaining(fieldnew);
    }
    if (fieldconfirm.length > 0) {
        await expect($(`#retypePassword-helper-text`)).toBeExisting();
        await expect($(`#retypePassword-helper-text`)).toHaveTextContaining(fieldconfirm);
    }
    if (popup.length > 0) {
        await expect($(`#notistack-snackbar`)).toBeExisting();
        await expect($(`#notistack-snackbar`)).toHaveTextContaining(popup);
    }
});