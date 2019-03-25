module.exports={
    url: function () {
        return this.api.launchUrl.concat("/login");
      },

    elements: {
        mainHeading: '.log-info',
        loginForm: '#loginForm',
        loginGroup: '.form-group',
        forgetpassword: '.forgot-pswd',
        socialAcct: '.social-btn',
        gmailPopup:'.yDmH0d',
        formgroup: '.form-group',
        signup: '.alreadyAccount',
        loginButton: 'button'
    },

    commands: [{
        isBodyDisplayed: function() {
            return this.navigate().waitForElementPresent('body', 5000);
        },

        isTitle: function (element, title) {
            return this.waitForElementVisible(element, 5000)
              .expect.element(element).text.to.equal(title);
        },

        isDisplayedWithDelay: function(element){
            return this.navigate().waitForElementPresent(element,5000)
        },

        isLoginFieldsDisplayed: function(element, title) {
            if(title=='Enter Your Email/Phone *') {
                return this.navigate().waitForElementPresent(element, 5000);
            }
            else if(title=='Enter Your Password *') {
                return this.navigate().waitForElementPresent(element, 5000);
            }
        },

        isRedirected: function(link) {
            return this.navigate(link);
        },

        gmailChecking: function(element) {
              return this.waitForElementVisible(element, 1000)
              .click(element, function(){
                  this.pause(1000)
              })
        },
        
        isGmailPopup: function(element) {
           return this.getAttribute(element, 'checked', function (result) {
               this.useXpath()
                 .click('//a[@class = "social-btn"]//span[normalize-space(text())="Sign in with Google"]')
                 .pause(1000)
                 .windowHandles(function (result) {
                    console.log(result)
                    var handle1 = result.value[1];
                    var handle2 = result.value[0]
                    this.switchWindow(handle1)
                      .pause(1000)
                      .closeWindow();
                    this.switchWindow(handle2)
                  });
                this.useCss()
              })
        },

        successfulLogin: function(email, password, element) {
            return this.getAttribute(element,'checked', function(result){
                this.useXpath()
               .assert.visible("//INPUT[@id='email']")
               . assert.visible("//INPUT[@id='password']")
               .setValue("//input[@id='email']",email)
               .setValue("//input[@id='password']",password)
               //.click("//button[@type='submit']")
               this.useCss()
              }
            )
        },
        buttonClick: function(element) {
            return this.submitForm(element)
        },

        disableButton: function(title) {
           // return this.getAttribute(element,'checked', function(result){
             //   this.useXpath()
               //.assert.visible("//button[@type='submit']")
               return this.waitForElementVisible('button',1000)
               .expect.element('button').to.have.attribute('disabled');
               //this.useCss()
              }
            
            
    }]
}