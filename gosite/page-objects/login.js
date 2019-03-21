module.exports={
    url: function () {
        return this.api.launchUrl.concat("/login");
      },

    elements: {
        mainHeading: '.log-info',
        loginForm: '#loginForm',
        loginButton: '.form-group',
        forgetpassword: '.forgot-pswd',
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
        }
    }]
}