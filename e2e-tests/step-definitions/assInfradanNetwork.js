const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

When(/^I Click Icon Menu Assessment$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div[2]/div/div/div[2]/div[8]/a/div')
    .click('//*[@id="root"]/div[2]/div/div/div[2]/div[8]/a/div')
    .pause(2000)
  });

Then(/^I Success Open Menu Assessment$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="menu-title"]`)
    .assert.elementPresent('//*[@id="menu-title"]');
  });

Given(/^I Success Open Menu Assessment Sub Menu Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="menu-title"]`)
    .assert.elementPresent('//*[@id="menu-title"]');
  });

When(/^I Click Add New Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/button')
    .click('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/button')
    .pause(2000)
  });

When(/^I Click Button Create Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[3]/div/div/div[2]/form/div[5]/button[2]')
    .click('/html/body/div[3]/div/div/div[2]/form/div[5]/button[2]')
    .pause(2000)
  });

Then(/^Show Alert Data Mandatory Input is Required$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div/div[2]/form/div[1]/div/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[2]/form/div[1]/div/p');
  });

Given(/^Open Pop Up Add New Assessment Sub Menu Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`/html/body/div[3]/div/div/div[1]/div/p`)
    .assert.elementPresent('/html/body/div[3]/div/div/div[1]/div/p');
  });

When(/^I Input Project Title in Pop Up Add New Assessment Sub Menu Infra & Network '(.*?)'$/, (ptitle) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="project_title"]')
    .pause(2000)
    .setValue('//*[@id="project_title"]', ptitle)
  });

When(/^I Input Company Name in Pop Up Add New Assessment Sub Menu Infra & Network '(.*?)'$/, (icompany) => {
    return client
    .useXpath()
    .waitForElementPresent('//input[@id="company_name"]')
    .setValue('//input[@id="company_name"]',icompany).pause(500).keys('\ue015').pause(500).keys('\ue007')
    .pause(2000)
});

When(/^I Input Building in Pop Up Add New Assessment Sub Menu Infra & Network '(.*?)'$/, (building) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="building_zone_name"]')
    .pause(2000)
    .setValue('//*[@id="building_zone_name"]', building)
  });

When(/^I Input Floor in Pop Up Add New Assessment Sub Menu Infra & Network '(.*?)'$/, (floor) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="floor_region_name"]')
    .pause(2000)
    .setValue('//*[@id="floor_region_name"]', floor)
  });

// When(/^I Input Company Name in Pop Up Add New Assessment Sub Menu Infra & Network '(.*?)'$/, (srchcompany) => {
//     if (srchcompany == null) {
//         srchcompany = '';
//     }
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="company_name"]/div/div[1]')
//     .getValue('xpath',`//*[@id="company_name"]/div/div[1]`,function(srcode){
//         srcode = srcode.value;
//         for (var i = 0; i < srcode.length; i++) {
//             client.setValue(`//*[@id="company_name"]/div/div[1]`,'').keys('\ue003')
//         }
//     })
//     .setValue('//*[@id="company_name"]/div/div[1]',srchcompany).pause(500).keys('\ue015').pause(500).keys('\ue007')
//     .pause(2000)
// });

Then(/^I Success Open Detil New Project$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div/div/div/div[1]`)
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[1]');
  });

Given(/^Redirect To Detil Project Assessment in Sub Menu Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div/div/div/div[1]`)
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[1]');
  });

When(/^I Click Sub Menu Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[1]/div/div[2]/div[1]')
    .click('//*[@id="root"]/div/div[1]/div/div[2]/div[1]')
    .pause(2000)
  });

When(/^I Search Project Title '(.*?)'$/, (listtitle) => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div/table/thead/tr[2]/th[2]/div/div/input')
    .pause(4000)
    .setValue('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div/table/thead/tr[2]/th[2]/div/div/input', listtitle)
  });

When(/^I Click Icon Delete List Project Assessment in Sub Menu Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[1]/button')
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[1]/button')
    .click('//*[@id="root"]/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/table/tbody/tr/td[1]/button')
  });

Then(/^I Confrim Ok Pop Up Delete Project Assessment in Sub Menu Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[4]/div[2]/button')
    .assert.elementPresent('/html/body/div[2]/div/div[4]/div[2]/button')
    .pause(2000)
    .click('/html/body/div[2]/div/div[4]/div[2]/button')
  });

Then(/^Show Pop Up Success Delete Project Assessment in Sub Menu Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[4]/div/button')
    .assert.elementPresent('/html/body/div[2]/div/div[4]/div/button')
    .click('/html/body/div[2]/div/div[4]/div/button')
    .pause(2000)
  });

Then(/^Show Pop Up Project Title and Company Already exist$/, () => {
    return client
    .useXpath()
    .waitForElementPresent('/html/body/div[2]/div/div[4]/div/button')
    .assert.elementPresent('/html/body/div[2]/div/div[4]/div/button')
    .click('/html/body/div[2]/div/div[4]/div/button')
    .pause(2000)
  });

Given(/^Open HomePage After Login$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div[1]/nav/span[2]/a/img`)
    .assert.elementPresent('//*[@id="root"]/div[1]/nav/span[2]/a/img')
    .click('//*[@id="root"]/div[1]/nav/span[2]/a/img')
  });

Then(/^I Success Create New Infra & Network and redirect Detil Data$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div/div/div/div[2]/div[2]/button[1]`)
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div[2]/button[1]');
  });

Given(/^Redirect Detil New Infra & Network$/, () => {
    return client
    .useXpath()
    .waitForElementPresent(`//*[@id="root"]/div/div[2]/div/div/div/div[2]/div[2]/button[1]`)
    .assert.elementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[2]/div[2]/button[1]');
  });

When(/^I Select Observed Device in Detil Infra & Network '(.*?)'$/, (device) => {
  return client
  .useXpath()
  .waitForElementPresent('//input[@id="observed_device_name"]')
  .getValue('xpath',`//input[@id="observed_device_name"]`,function(value1){
  srcode = value1.value;
  client.setValue(`//input[@id="observed_device_name"]`, device)
  .keys('\uE007')
  })
});

When(/^I Select Ownership in Detil Infra & Network '(.*?)'$/, (ownership) => {
  return client
  .useXpath()
  .waitForElementPresent('//input[@id="ownership_name"]')
  .getValue('xpath',`//input[@id="ownership_name"]`,function(value1){
  srcode = value1.value;
  client.setValue(`//input[@id="ownership_name"]`, ownership)
  .pause(3000)
  .keys('\uE007')
  })
});

When(/^I Select Brand in Detil Infra & Network '(.*?)'$/, (brand) => {
  return client
  .useXpath()
  .waitForElementPresent('//input[@id="brand_name"]')
  .getValue('xpath',`//input[@id="brand_name"]`,function(value1){
  srcode = value1.value;
  client.setValue(`//input[@id="brand_name"]`, brand)
  .pause(3000)
  .keys('\uE007')
  })
});

When(/^I Select on Perm or cloud in Detil Infra & Network '(.*?)'$/, (cloud) => {
  return client
  .useXpath()
  .waitForElementPresent('//input[@id="env_platform"]')
  .getValue('xpath',`//input[@id="env_platform"]`,function(value1){
  srcode = value1.value;
  client.setValue(`//input[@id="env_platform"]`, cloud)
  .pause(3000)
  .keys('\uE007')
  })
});

When(/^I Select Waranty in Detil Infra & Network '(.*?)'$/, (waranty) => {
  return client
  .useXpath()
  .waitForElementPresent('//input[@id="warranty_name"]')
  .getValue('xpath',`//input[@id="warranty_name"]`,function(value1){
  srcode = value1.value;
  client.setValue(`//input[@id="warranty_name"]`, waranty)
  .pause(3000)
  .keys('\uE007')
  })
});

// When(/^I Select Observed Device in Detil Infra & Network '(.*?)'$/, (device) => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//input[@id="observed_device_name"]')
//   .getValue('xpath',`//input[@id="observed_device_name"]`,function(value1){
//   srcode = value1.value;
//   client.setValue(`//input[@id="observed_device_name"]`, device)
//   .pause(3000)
//   .keys('\uE007')
//   })
//   .assert.containsText('//input[@id="observed_device_name"]', 'samsung')
//   });

// When(/^I Select Ownership in Detil Infra & Network '(.*?)'$/, (ownership) => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//*[@id="ownership_name"]/div/div[1]/div[1]')
//   .setValue('//*[@id="ownership_name"]/div/div[1]/div[1]',ownership).pause(500).keys('\ue015').pause(500).keys('\ue007')
//   .pause(2000)
// });

// When(/^I Select Brand in Detil Infra & Network '(.*?)'$/, (brand) => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//*[@id="brand_name"]/div/div[1]/div[1]')
//   .setValue('//*[@id="brand_name"]/div/div[1]/div[1]',brand).pause(500).keys('\ue015').pause(500).keys('\ue007')
//   .pause(2000)
// });

// When(/^I Select on Perm or cloud in Detil Infra & Network '(.*?)'$/, (cloud) => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//input[@id="env_platform"]/div/div[1]/div[1]')
//   .setValue('//input[@id="env_platform"]/div/div[1]/div[1]',cloud).pause(500).keys('\ue015').pause(500).keys('\ue007')
//   .pause(2000)
// });

// When(/^I Select Waranty in Detil Infra & Network '(.*?)'$/, (waranty) => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//input[@id="warranty_name"]/div/div[1]/div[1]')
//   .setValue('//input[@id="warranty_name"]/div/div[1]/div[1]',waranty).pause(500).keys('\ue015').pause(500).keys('\ue007')
//   .pause(2000)
// });

When(/^I Input Specification in Detil Infra & Network '(.*?)'$/, (spesific) => {
  return client
  .useXpath()
  .waitForElementPresent('//*[@id="specification_name"]')
  .assert.elementPresent('//*[@id="specification_name"]')
  .setValue('//*[@id="specification_name"]', spesific)
});

When(/^I Input Qty in Detil Infra & Network '(.*?)'$/, (qty) => {
  return client
  .useXpath()
  .waitForElementPresent('//*[@id="quantity"]')
  .assert.elementPresent('//*[@id="quantity"]')
  .setValue('//*[@id="quantity"]', qty)
});

When(/^I Input Notes in Detil Infra & Network '(.*?)'$/, (notes) => {
  return client
  .useXpath()
  .waitForElementPresent('//*[@id="notes"]')
  .pause(2000)
  .setValue('//*[@id="notes"]', notes)
});

When(/^I Click Button Save in Detil Infra & Network$/, () => {
  return client
  .useXpath()
  .waitForElementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[3]/div[2]/div/div[1]/div/div[1]/form/div[4]/div/button[2]')
  .assert.elementPresent('//*[@id="root"]/div/div[2]/div/div/div/div[3]/div[2]/div/div[1]/div/div[1]/form/div[4]/div/button[2]')
  .pause(2000)
  .click('//*[@id="root"]/div/div[2]/div/div/div/div[3]/div[2]/div/div[1]/div/div[1]/form/div[4]/div/button[2]')
});

Then(/^I Click Save pop Up Confirm in Detil & Network$/, () => {
  return client
  .useXpath()
  .waitForElementPresent('/html/body/div[2]/div/div[6]/button[3]')
  .assert.elementPresent('/html/body/div[2]/div/div[6]/button[3]')
  .pause(2000)
  .click('/html/body/div[2]/div/div[6]/button[3]')
});

Given(/^I Redirect Menu Assessment$/, () => {
  return client
  .useXpath()
  .waitForElementPresent(`//*[@id="menu-title"]`)
  .assert.elementPresent('//*[@id="menu-title"]');
});

When(/^I Click Sub Menu Application Support in Menu Assesment$/, () => {
  return client
  .useXpath()
  .waitForElementPresent('//*[@id="root"]/div/div[1]/div/div[2]/div[2]')
  .click('//*[@id="root"]/div/div[1]/div/div[2]/div[2]')
});

Then(/^I Succsess Open Sub Menu Aplication Support in Menu Assesment$/, () => {
  return client
  .useXpath()
  .waitForElementPresent(`//*[@id="root"]/div/div[2]/div/div/div[1]/h4`)
  .assert.elementPresent('//*[@id="root"]/div/div[2]/div/div/div[1]/h4');
});

// Given(/^I Redirect Sub Menu Aplication Support$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//*[@id="root"]/div/div[2]/div/div/div[1]/h4`)
//   .assert.elementPresent('//*[@id="root"]/div/div[2]/div/div/div[1]/h4');
// });

