Feature: Using the my-component

  In order to make the user feel welcomed
  The user should see a welcome message

  Scenario Outline: Seeing the welcome message

  Scenario: Seeing the default name

     When John opens the my-component preview
     Then he sees the welcome text John Doe

  Scenario: Changing the name

    Given that Alice opened the my-component preview
     When Alice changes the firstname to Alice
      And Alice changes the lastname to Cooper
     Then she sees the welcome text Alice Cooper