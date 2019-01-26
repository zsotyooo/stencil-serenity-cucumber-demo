Feature: See welcome message

  In order to make the user feel welcomed
  The user should see a welcome message

  Scenario: Seeing the name of the user

     When I open the my-component preview
     Then I see the welcome text John Doe