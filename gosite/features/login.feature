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
  And the login form exists
  Then the page contains "Enter Your Email/Phone *" textfield
  Then the page contains "Enter Your Password *" textfield
  #And the page contains "Login" button 
  #And the page contains "forgot your password?" Link

 #Scenario: Check forgot your password link

   #Given I am on the login page
   #And the login form exists
   #When I click on "forgot your password" link
   #Then I am redirected to "http://lvh.me:3500/forgot" page

 #Scenario: Check Login with Gmail

   #Given I am on the login page
   #And the login form exists
   #When I click on "Sign in with Google" Google link
   #Then A popup launched for signing with google
  #  Then the Google "loginform" exists                           
  #  And the form contains "email" and "password" input field
  #  And I enterd valid credentials
  #  And I click on "Login" button on Google page
  #  Then the page should redirect to "Home"
  
  #Scenario: Check Login with Facebook

    #Given I am on the login page
    #And the login form exists
    #When I click on "Sign in with Facebook" Facebook link
    #Then A popup launched for signing with facebook
    #Then the facebook "loginform" exists
    #And the form contains "email" and "password" input field
    #And I enterd valid credentials
    #And I click on "Login" button on facebook page
    # Then the page should redirect to "Home"                     

# Scenario: Check Signup Link

   #Given I am on the login page
   #And the login form exists
   #And the page contains a "Sign Up" Link
   #When I click on the "Sign Up" link
   #Then I am redirected to "http://lvh.me:3500/signup" page

 #Scenario: Login without credentials

  #Given I am on the login page
 # And the login form exists
  #When I click on the "Login" button
 # Then the "Login" button is disabled

 #Scenario: Login with email only

  #Given I am on the login page
  #And the login form exists
  #When I enter the "email" only
  #And I click on the "Login" button
  #Then the "Login" button is disabled

 #Scenario: Login with password only

  #Given I am on the login page
  #And the login form exists
  #Then I enter the "password" only
  #And I click on "Login" button
  #Then the "Login" button is disabled

 #Scenario: Login with invalid email

  #Given I am on the login page
  #And the login form exists
  #When I enter an invalid "email" and "password"
  #Then the "Login" button is visible
  #And I click on the active "Login" button
  #Then the Error toaster exists
  #And I should see "Invalid email address" message

 #Scenario: Unsuccessful login

   #Given I am on the login page
   #And the login form exists
   #When I enter the incorrect login credentials
   #And I click on the active "Login" button
   #Then the toaster exists
   #And I should see "Invalid credentials" message

 #Scenario: Successful login for customer

   #Given I am on the login page
   #And the login form exists
   #When I enter the correct login credentials
   #And I click on the active "Login" button
   #And the page should redirect to "Home"