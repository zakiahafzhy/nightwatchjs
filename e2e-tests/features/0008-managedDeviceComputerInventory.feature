#ManagedDeviceComputerInventory
@ManagedDeviceComputerInventory
Feature: Managed Device - Computer Inventory

@C3859
Scenario: User open detail company on sub Menu Computer Inventory
Given I on sub menu Computer Health Statistic
When I choose sub menu Computer Inventory
And I show detail company 'PT. Xapiens Teknologi Indonesia'
Then Show List of Computer Inventory