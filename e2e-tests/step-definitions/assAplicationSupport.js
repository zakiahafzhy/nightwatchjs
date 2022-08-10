const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

When(/^I Click Button Add New Aplication Support in Sub Menu Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/button')
    .click('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/button')
  });
  
  When(/^I Input Aplication Name in Sub Menu Aplication Support '(.*?)'$/, (aplname) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="application_name"]')
    .pause(2000)
    .setValue('//*[@id="application_name"]', aplname)
  });
  
  // When(/^I Select Company Name in Sub Menu Aplication Support '(.*?)'$/, (aplcompany) => {
  //   return client
  //   .useXpath()
  //   .waitForElementPresent('//*[@id="company_name"]/input')
  //   .getValue('xpath',`//*[@id="company_name"]/input`,function(value1){
  //   srcode = value1.value;
  //   client.setValue(`//*[@id="company_name"]/input`, aplcompany)
  //   .pause(3000)
  //   .keys('\uE007')
  //   })
  // });
  
  When(/^I Select Company Name in Sub Menu Aplication Support '(.*?)'$/, (aplcompany) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="company_name"]')
    .getValue('xpath',`//input[@id="company_name"]`,function(value1){
    srcode = value1.value;
    client.setValue(`//input[@id="company_name"]`, aplcompany)
    .pause(3000)
    .keys('\uE007')
    })
  });
  
  When(/^I Input Client Name in Sub Menu Aplication Support '(.*?)'$/, (aplclient) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="client_name"]')
    .pause(2000)
    .setValue('//*[@id="client_name"]', aplclient)
  });
  
  When(/^I Input What kind of application it is '(.*?)'$/, (q1) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="application_type"]')
    .pause(2000)
    .setValue('//*[@id="application_type"]', q1)
  });
  
  When(/^I Select Yes Is this application a core bussiness$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="is_core_business_yes"]')
    .click('//*[@id="is_core_business_yes"]')
  });
  
  When(/^I Select COTS COTS or Custom Developed$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="is_cots_custom_developed_cots"]')
    .click('//*[@id="is_cots_custom_developed_cots"]')
  });
  
  When(/^I Input COTS Vendor '(.*?)'$/, (q4) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="cots_vendor"]')
    .pause(2000)
    .setValue('//*[@id="cots_vendor"]', q4)
  });
  
  When(/^I Input Special Requirement on Technologies '(.*?)'$/, (q5) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="special_requirement_technologies"]')
    .pause(2000)
    .setValue('//*[@id="special_requirement_technologies"]', q5)
  });
  
  When(/^I Select Yes Are users from various companies$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="is_users_various_companies_yes"]')
    .click('//*[@id="is_users_various_companies_yes"]')
  });
  
  When(/^I Select Yes Are users from various departments$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="is_users_various_departments_yes"]')
    .click('//*[@id="is_users_various_departments_yes"]')
  });
  
  When(/^I Select Yes Is the report more than 5$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="is_report_more_5_yes"]')
    .click('//*[@id="is_report_more_5_yes"]')
  });
  
  When(/^I Select Yes Is there any relation with other application$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="is_relation_other_application_yes"]')
    .click('//*[@id="is_relation_other_application_yes"]')
  });
  
  When(/^I Select Yes Is there any approval process$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="is_approval_process_yes"]')
    .click('//*[@id="is_approval_process_yes"]')
  });
  
  When(/^I Click Button Next Step 2$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div/div/form/div[2]/div[2]/div/button')
    .click('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div/div/form/div[2]/div[2]/div/button')
  });
  
  When(/^I Input Application server host name '(.*?)'$/, (q11) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="application_server_host_name"]')
    .pause(2000)
    .setValue('//*[@id="application_server_host_name"]', q11)
  });
  
  When(/^I Input What is the current Operating System '(.*?)'$/, (q12) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="current_operating_system"]')
    .pause(2000)
    .setValue('//*[@id="current_operating_system"]', q12)
  });
  
  When(/^I Input What is the application server type '(.*?)'$/, (q13) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="application_server_type"]')
    .pause(2000)
    .setValue('//*[@id="application_server_type"]', q13)
  });
  
  When(/^I Input What is the web server type '(.*?)'$/, (q14) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="web_server_type"]')
    .pause(2000)
    .setValue('//*[@id="web_server_type"]', q14)
  });
  
  When(/^I Input What is the database server host name '(.*?)'$/, (q15) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="database_server_host_name"]')
    .pause(2000)
    .setValue('//*[@id="database_server_host_name"]', q15)
  });
  
  When(/^I Input What is the database server type '(.*?)'$/, (q16) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="database_server_type"]')
    .pause(2000)
    .setValue('//*[@id="database_server_type"]', q16)
  });
  
  When(/^I Input What is the version of the database being used '(.*?)'$/, (q17) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="version_database_used"]')
    .pause(2000)
    .setValue('//*[@id="version_database_used"]', q17)
  });
  
  When(/^I Select Yes Is this application required to be accessible by external$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="is_required_accessible_yes"]')
    .click('//*[@id="is_required_accessible_yes"]')
  });
  
  When(/^I Click Button Next Step 3$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div/div/form/div[2]/div[2]/div/button')
    .click('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div/div/form/div[2]/div[2]/div/button')
  });
  
  When(/^I Click Button Save Draft Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div[2]/div[2]/div/button')
    .pause(3000)
    .click('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div[2]/div[2]/div/button')
  });
  
  // Then(/^I Success Save Draft Aplication Support$/, () => {
  //   return client
  //   .useXpath()
  //   .waitForElementPresent('/html/body/div[3]/div/button')
  //   .pause(3000)
  //   .click('/html/body/div[3]/div/button')
  // });
  
  Then(/^I Success Save Draft Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="swal2-title"]`)
    .assert.elementPresent('//*[@id="swal2-title"]')
    .click(`/html/body/div[3]/div/div[6]/button[3]`)
  });
  
  
  When(/^I Click Yes Confrim Pop Up Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[6]/button[3]')
    .click('/html/body/div[2]/div/div[6]/button[3]')
  });
  
  When(/^I Search Aplication Name '(.*?)'$/, (searchapl) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div/div[1]/div/table/thead/tr[2]/th[3]/div/div/input')
    .pause(2000)
    .setValue('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div/div[1]/div/table/thead/tr[2]/th[3]/div/div/input', searchapl)
  });
  
  When(/^I Click Edit Aplication Go To Detil$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div/div[2]/div/div[1]/table/tbody/tr/td[2]/button[1]')
    .click('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div/div[2]/div/div[1]/table/tbody/tr/td[2]/button[1]')
  });
  
  When(/^I Click Button Submit Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div/div/form/div[2]/div[2]/div/button')
    .click('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div/div/form/div[2]/div[2]/div/button')
  });
  
  Then(/^I Click Pop Up Confrim Create Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[6]/button[3]')
    .click('/html/body/div[2]/div/div[6]/button[3]')
  });
  
  // Then(/^I Success Create Aplication Support$/, () => {
  //   return client
  //   .useXpath()
  //   .waitForElementPresent('/html/body/div[3]/div/div[6]/button[3]')
  //   .click('/html/body/div[3]/div/div[6]/button[3]')
  // });
  
  Then(/^I Success Create Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="swal2-title"]`)
    .assert.elementPresent('//*[@id="swal2-title"]')
    .click(`/html/body/div[2]/div/div[6]/button[3]`)
  });
  
  Given(/^I Redirect Sub Menu Aplication Support$/, () => {
    return client.url('https://qa-xswift.xapiens.id/assessment/application-support')
    .maximizeWindow()
    .pause(5000)
  })
  
  When(/^I Input Search Aplication Name '(.*?)'$/, (saplname) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div/div[1]/div/table/thead/tr[2]/th[3]/div/div/input')
    .pause(2000)
    .setValue('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div/div[1]/div/table/thead/tr[2]/th[3]/div/div/input', saplname)
  });
  
  When(/^I Click Button Delete Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div/div[2]/div/div[1]/table/tbody/tr/td[2]/button[2]')
    .click('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div/div[2]/div/div[1]/table/tbody/tr/td[2]/button[2]')
  });
  
  Then(/^I Confrim Pop Up Delete Aplication Support$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[6]/button[3]')
    .click('/html/body/div[2]/div/div[6]/button[3]')
  });
  
  