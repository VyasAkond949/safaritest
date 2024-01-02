Feature: Clickon Sign in and entering email

    Scenario: Sign in and entering email
        Given I launch the application
        When I navigate to sign in page
        And I switch to the iframe
        And I enter the creds for signin
        Then I expect to see the password field