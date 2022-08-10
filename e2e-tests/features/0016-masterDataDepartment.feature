#MasterDataDepartment
@MasterDataDepartment
Feature: Master Data - Department

@C4033
Scenario: User open sub menu Department
Given user already on master data menu
When user click sub menu department
Then will show list of department

@C4036
Scenario: Check mandatory field add new department
Given user already on sub menu department
When user click button add new department
And click button save add department
Then will show warning mandatory field add department

# @C4034
# Scenario: User add new department
# Given user already on sub menu department
# When user click button add new department
# And fill company department with 'Khusus Automation'
# And fill department code with 'QAAUTOMATION01'
# And fill department head name with 'QA Engineer Automation'
# And fill department name with 'Automation'
# And add approver name department with 'QA Engineer'
# And add email approver department with 'Dummy.Su@xapiens.id'
# And click button save add department
# Then successfully add department

@C4035
Scenario: User add duplicate department
Given user already on sub menu department
When user click button add new department
And fill company department with 'Khusus Automation'
And fill department code with 'QAAUTOMATION01'
And fill department head name with 'QA Engineer Automation'
And fill department name with 'Automation'
And add approver name department with 'QA Engineer'
And add email approver department with 'Dummy.Su@xapiens.id'
And click button save add department
Then show warning duplicate department

@C4037
Scenario: User see detail department
Given user already on sub menu department
When user click icon see detail
Then will show detail department

@C4038
Scenario: User edit department
Given user already on sub menu department
When user click icon edit department
And edit company department head name with 'Automation Edit'
And click button save edit department
Then successfully add department

# @C4039
# Scenario: User delete department
# Given user already on sub menu department
# When user click icon delete department
# Then successfully delete department