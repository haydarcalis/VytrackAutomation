@new
Feature:Manage Filter Function

  Background:
    Given The user logged in as "sales manager"
    When The user navigates to "Fleet" "Vehicles"
    And The user clicks on filterIcon


  Scenario:Manage Filter Button visible
    Then The user should see Manage Filter button became visible

  Scenario: Manage Filter options list
    When The user clicks on Manage Filter Menu
    Then The user should see the following Manage Filter options

      | License Plate             |
      | Tags                      |
      | Driver                    |
      | Location                  |
      | Chassis Number            |
      | Model Year                |
      | Last Odometer             |
      | Immatriculation Date      |
      | First Contract Date       |
      | Catalog Value (VAT Incl.) |
      | Seats Number              |
      | Doors Number              |
      | Color                     |
      | Transmission              |
      | Fuel Type                 |
      | CO2 Emissions             |
      | Horsepower                |
      | Horsepower Taxation       |
      | Power (KW)                |

  Scenario:Apply filters by clicking
    When The user clicks on Manage Filter Menu
    Then The user can select the filter name by clicking from the Manage filters menu

  Scenario:Apply filters by typing
    When The user clicks on Manage Filter Menu
    Then The user can select the filter name by typing from the Manage filters menu

  Scenario:Apply multiple filters at the same time and Remove the all
    When The user clicks on Manage Filter Menu
    Then The user can select multiple filters at the same time from the Manage filters menu
    And The user clicks on the Reset icon
    And The user clicks on Manage Filter Menu
    And The user can remove all filters by clicking on the reset icon

