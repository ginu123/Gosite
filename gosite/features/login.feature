#features/login.feature

 @login @Task1

 Feature: User Login

 As a user of the company
   I want to login myself
   In order to access my account functions


 Scenario: Display login form

   Given I am on the login page
   And the form title is "Sign In Now"

 Scenario: Login form contents

  Given I am on the login page
  And the "login form" exists
  Then the page contains "Enter Your Email/Phone *" textfield
  Then the page contains "Enter Your Password *" textfield
  And the page contains "Login" button 
  And the page contains "forgot your password?" Link

 Scenario: Check forgot your password link

   Given I am on the login page
   And the "login form" exists
   When I click on "forgot your password" link
   Then I am redirected to "https://platform.gosite.build/forgot" page

 Scenario: Check Login with Gmail

   Given I am on the login page
   And the "login form" exists
   When I click on "Sign in with Google" Google link
   Then A popup launched for signing with google
   Then the "Google loginform" exists                                           

 Scenario: Check Signup Link

   Given I am on the login page
   And the "login form" exists
   And the page contains "Sign Up" Link
   When I click on the "Sign Up" link
   Then I am redirected to "https://platform.gosite.build/signup" page

 Scenario: Successful login for customer

   Given I am on the login page
   And the "login form" exists
   When I enter the correct login credentials
   And I click on the active "Login" button
   Then I am redirected to "https://platform.gosite.build/1000001321/home" page

Scenario: Login without credentials

  Given I am on the login page
  And the "login form" exists
  Then the "Login" button is disabled