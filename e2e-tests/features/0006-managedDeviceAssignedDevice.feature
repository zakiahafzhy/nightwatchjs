#ManagedDeviceAssignedDevice
@ManagedDeviceAssignedDevice
Feature: Managed Device - Assigned Device

@C3828
Scenario: Open Menu Managed Device
Given User back to homepage
When I open menu managed device
Then Success Open Menu Managed Device

@C2979
Scenario: User export data Assigned Device
Given I on sub menu List User Assignment
When I search company name with 'PT. Xapiens Teknologi Indonesia' and show detail company
And Export to excel Assigned Devices
Then Success export data

@C2980
Scenario: User export data Not Assigned Device
Given I on detail company
When Export to excel Not - Assigned Devices
Then Success export data