const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

Given(/^I Open Menu Manage Device in Assessment$/, () => {
    return client.url('https://qa-xswift.xapiens.id/assessment/managed-device')
    .maximizeWindow()
    .pause(5000)
  })

When(/^I Click Button Add New in Manage Device$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/button')
    .click('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/button')
    .pause(2000)
  });

When(/^I Click Button Create in Pop up Create Manage Device$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div[2]/form/div[5]/button[2]')
    .click('/html/body/div[3]/div/div/div[2]/form/div[5]/button[2]')
    .pause(2000)
  });

Then(/^Show Alert without mandatory data$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[1]/div/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[2]/form/div[1]/div/p');
  });

Given(/^Succses Open Form Pre Assessment in Manage Device$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div/div[1]/div`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[1]/div');
  });

When(/^I Input Project Title in Manage Device '(.*?)'$/, (ptitle) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="project_title"]')
    .pause(2000)
    .setValue('//*[@id="project_title"]', ptitle)
  });

When(/^I Input Company Name in Manage Device '(.*?)'$/, (companymd) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="company_name"]')
    .getValue('xpath',`//input[@id="company_name"]`,function(value1){
    srcode = value1.value;
    client.setValue(`//input[@id="company_name"]`, companymd)
    .pause(3000)
    .keys('\uE007')
    })
  });

When(/^I Input Client Name PIC in Manage Device '(.*?)'$/, (pic) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="client_name"]')
    .pause(2000)
    .setValue('//*[@id="client_name"]', pic)
  });

When(/^I Select What devices do you want to manage$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="desktop"]')
    .click('//*[@id="desktop"]')
    .pause(2000)
  });

When(/^I Input Number Device in detil manage device '(.*?)'$/, (ndevice) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="number_of_desktop"]')
    .pause(2000)
    .setValue('//*[@id="number_of_desktop"]', ndevice)
  });

When(/^I Click Button Confrim Step 1 in detil manage device$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div/form/div[2]/div/div/div/div/div[7]/button')
    .click('//*[@id="root"]/div/div[2]/div/div/div/form/div[2]/div/div/div/div/div[7]/button')
    .pause(2000)
  });

When(/^I Input How many computer devices still have Warranty Support '(.*?)'$/, (qdevice2) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="warranty_support"]')
    .pause(2000)
    .setValue('//*[@id="warranty_support"]', qdevice2)
  });

When(/^I Select If there is a damaged unit that is not covered by the warranty '(.*?)'$/, (qdevice3) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="not_covered_by_warranty"]')
    .getValue('xpath',`//*[@id="not_covered_by_warranty"]`,function(value1){
    srcode = value1.value;
    client.setValue(`//*[@id="not_covered_by_warranty"]`, qdevice3)
    .pause(3000)
    .keys('\uE007')
    })
  });

When(/^I Input How many devices that are over 5 years old '(.*?)'$/, (qdevice4) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="over_5_years"]')
    .pause(2000)
    .setValue('//*[@id="over_5_years"]', qdevice4)
  });

When(/^I Input What computer brands and models are currently used '(.*?)'$/, (qdevice5) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="computer_brand"]')
    .pause(2000)
    .setValue('//*[@id="computer_brand"]', qdevice5)
  });

When(/^I Select Ownership of devices that are spread over the user '(.*?)'$/, (qdevice6) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="ownership_device"]')
    .getValue('xpath',`//*[@id="ownership_device"]`,function(value1){
    srcode = value1.value;
    client.setValue(`//*[@id="ownership_device"]`, qdevice6)
    .pause(3000)
    .keys('\uE007')
    })
  });

When(/^I Input How many devices do you have for each Branch Office '(.*?)'$/, (qdevice7) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="device_in_branch_office"]')
    .pause(2000)
    .setValue('//*[@id="device_in_branch_office"]', qdevice7)
  });

When(/^I Select Yes Does the company have a dedicated storage room for IT Devices$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="storage_yes"]')
    .click('//*[@id="storage_yes"]')
    .pause(2000)
  });

When(/^I Select Yes Is there a policy$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="policy_yes"]')
    .click('//*[@id="policy_yes"]')
    .pause(2000)
  });

When(/^I Input Note Step 1 '(.*?)'$/, (noted) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="policy_of_computer_specifications"]')
    .pause(2000)
    .setValue('//*[@id="policy_of_computer_specifications"]', noted)
  });

When(/^I Click Button Next Step$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="button_submit"]')
    .click('//*[@id="button_submit"]')
    .pause(2000)
  });

When(/^I Input How does the company manage IT Inventory '(.*?)'$/, (qdevice8) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="it_inventory"]')
    .pause(2000)
    .setValue('//*[@id="it_inventory"]', qdevice8)
  });

When(/^I Select No Do you currently have Remote Application Software$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="remote_app_no"]')
    .click('//*[@id="remote_app_no"]')
    .pause(2000)
  });

When(/^I Select Yes Has the OS Image been provided by the Company$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="os_image_yes"]')
    .click('//*[@id="os_image_yes"]')
    .pause(2000)
  });

When(/^I Input What is the current number of Windows OS distributions for each version '(.*?)'$/, (qdevice9) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="current_number_of_windows_os"]')
    .pause(2000)
    .setValue('//*[@id="current_number_of_windows_os"]', qdevice9)
  });

When(/^I Select No Is the computer OS installation already using a system such as Microsoft Deployment Toolkit or MS Intune$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="os_installation_no"]')
    .click('//*[@id="os_installation_no"]')
    .pause(2000)
  });

When(/^I Select Yes Is there a system available for Windows Patch Updates such as$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="system_for_windows_patch_yes"]')
    .click('//*[@id="system_for_windows_patch_yes"]')
    .pause(2000)
  });

When(/^I Select Yes Is there a system available for deploying software silently$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="system_for_deploy_yes"]')
    .click('//*[@id="system_for_deploy_yes"]')
    .pause(2000)
  });

When(/^I Select No Is there a standard antivirus$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="antivirus_no"]')
    .click('//*[@id="antivirus_no"]')
    .pause(2000)
  });

When(/^I Select No Do you have backup storage for ex user device$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="backup_storage_no"]')
    .click('//*[@id="backup_storage_no"]')
    .pause(2000)
  });

When(/^I Input How does the company manage Software '(.*?)'$/, (qdevice10) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="manage_software_license"]')
    .pause(2000)
    .setValue('//*[@id="manage_software_license"]', qdevice10)
  });

When(/^I Input What commercial software do you currently have and how many licenses are there for each software '(.*?)'$/, (qdevice11) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="commercial_software"]')
    .pause(2000)
    .setValue('//*[@id="commercial_software"]', qdevice11)
  });

When(/^I Input What type of Office Suites are owned and distributed to the user '(.*?)'$/, (qdevice12) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="office_suites"]')
    .pause(2000)
    .setValue('//*[@id="office_suites"]', qdevice12)
  });

When(/^I Select No Is there any branch location$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="branch_office_no"]')
    .click('//*[@id="branch_office_no"]')
    .pause(2000)
  });

When(/^I Input How many branch offices your company have '(.*?)'$/, (qdevice13) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="number_branch_office"]')
    .pause(2000)
    .setValue('//*[@id="number_branch_office"]', qdevice13)
  });

When(/^I Select No Does it require a special on site Engineer for HO and each branch office$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="require_engineer_no"]')
    .click('//*[@id="require_engineer_no"]')
    .pause(2000)
  });

Then(/^I Click Button Submit$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="button_submit"]')
    .click('//*[@id="button_submit"]')
    .pause(2000)
  });

When(/^I Click Icon Delete in list data manage device$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]/button[2]')
    .click('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]/button[2]')
    .pause(2000)
  });