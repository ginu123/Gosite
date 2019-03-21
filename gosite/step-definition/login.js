const{client}=require('nightwatch-cucumber');
const{Given,Then,When}=require('cucumber');

const log =client.page.login();

Given(/^I am on the login page$/, () => {
    return log.isBodyDisplayed();
});

Then(/^the form title is "(.*?)"$/, (title)=> {
    return log.isTitle('@mainHeading',title);
});

Then(/^the login form exists$/, ()=>{
    return log.isDisplayedWithDelay('@loginForm');
});

Then(/^the page contains "(.*?)" textfield$/, (title)=>{
    return log.isLoginFieldsDisplayed('@loginForm', title);
});

Then(/^the page contains "(.*?)" button$/, (title)=>{
    return log.isDisplayedWithDelay('@loginButton', title);
});

Then(/^the page contains "(.*?)" Link$/, (title)=>{
    return log.isDisplayedWithDelay('@forgetpassword', title);
});