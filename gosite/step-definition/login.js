const{client}=require('nightwatch-cucumber');
const{Given,Then,When}=require('cucumber');

const log =client.page.login();

//Display login form
Given(/^I am on the login page$/, () => {
    return log.isBodyDisplayed();
});

Then(/^the form title is "(.*?)"$/, (title)=> {
    return log.isTitle('@mainHeading',title);
});

//Login form contents
Then(/^the "(.*?)" exists$/, (title)=>{
    return log.isDisplayedWithDelay('@loginForm');
});

Then(/^the page contains "(.*?)" textfield$/, (title)=>{
    return log.isLoginFieldsDisplayed('@loginForm', title);
});

Then(/^the page contains "(.*?)" button$/, (title)=>{
    return log.isDisplayedWithDelay('@loginGroup', title);
});

Then(/^the page contains "(.*?)" Link$/, (title)=>{
    return log.isDisplayedWithDelay('@forgetpassword', title);
});

//Check forgot your password link
When(/^I click on "(.*?)" link$/, (title)=>{
    return log.isDisplayedWithDelay('@forgetpassword', title)
});

Then(/^I am redirected to "(.*?)" page$/, (title)=>{
    return log.isRedirected(title);
});

//Check Login with Gmail
When(/^I click on "(.*?)" Google link$/, (title)=>{
    return log.gmailChecking('@loginGroup');
});

Then(/^A popup launched for signing with google$/, ()=>{
    return log.isGmailPopup('@formgroup')
});

//Successful login for customer

When(/^I click on the "(.*?)" link$/, (title)=>{
    return log.isDisplayedWithDelay('@signup', title)
});

When(/^I enter the correct login credentials$/, ()=> {
    return log.successfulLogin('kripadase@toobler.com', 'password', '@loginForm')
});

Then(/^I click on the active "(.*?)" button$/, (title)=> {
    return log.buttonClick('@loginGroup')
});

//Login without credentials
Then(/^the "(.*?)" button is disabled$/, (title)=> {
        return log.disableButton(title)
});
