#ManagedDeviceComputerHealthStatistic
@ManagedDeviceComputerHealthStatistic
Feature: Managed Device - Computer Health Statistic

@C2913 @C2912
Scenario: User open detail company on sub Menu Computer Health Statistic
Given I on sub menu Computer Health Statistic
When I show detail company 'PT. Xapiens Teknologi Indonesia'
Then Show detail matrics

@C2831
Scenario: User export Non - Standard Devices Out of Warranty
Given Show detail matrics
When I click see details Non - Standard Devices
And Export the data
Then Export success

@C2833
Scenario: User export Device With Anomalies - Different Location vs IP Segment
Given I on sub menu Computer Health Statistic
When I show detail company 'PT. Xapiens Teknologi Indonesia'
And I click see details on Devices With Anomalies
And Export the data
Then Export success