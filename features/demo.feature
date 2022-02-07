Feature: User want to test demotours
  Scenario: User wants to register in the site
    Given User is on Home page of new tours
    When user is on registration and enters contact information
    And user enters mailing information
    Then user enters user information
    

  Scenario:User wants to login the site
    Given user is on the login page
    When user enters login details
    
     
