#MasterDataCompany
@MasterDataCompany
Feature: Master Data - Company

@C3952 @C3953 @C3954
Scenario: Check mandatory field add new company
Given user already on sub menu company
When user click button add new
And click button save without fill any field
Then show warning mandatory field

# @C3955
# Scenario: User add new company
# Given pop up add new company already shown
# When user fill field company with 'Automation Company 01'
# And fill field company code with 'QAAUTOMATION01'
# And fill field AM name with 'Yani Iriana Putri'
# And fill field AM email with 'yani.putri@xapiens.id'
# And fill field director name with 'Automation QA'
# And fill field company parent with 'Khusus Automation'
# And fill field approver name with 'Yani Iriana Putri'
# And fill field approver email with 'yani.putri@xapiens.id'
# And click button add for add approver
# And click button save for save company
# Then successfully add company with name 'Automation Company'

@C3956
Scenario: User add duplicate company
Given user already on sub menu company
When user click button add new
And user fill field company with 'Automation Company'
And fill field company code with 'QAAUTOMATION01'
And fill field AM name with 'Yani Iriana Putri'
And fill field AM email with 'yani.putri@xapiens.id'
And fill field director name with 'Automation QA'
And fill field company parent with 'Khusus Automation'
And fill field approver name with 'Yani Iriana Putri'
And fill field approver email with 'yani.putri@xapiens.id'
And click button add for add approver
And click button save for save company
Then show warning company name already exists

@C3957	
Scenario: User show detail company
Given user already on sub menu company
When user click button show company
Then will show detail company

@C3958
Scenario: User edit company
Given already on list data company
When user click edit company
And user fill field company with 'Automation Company Edited'
And click button save for save company
Then successfully add company with name 'Automation Company Edited'

# @C3959
# Scenario: User delete company
# Given user already on sub menu company
# When user delete company
# Then will successfully deleted