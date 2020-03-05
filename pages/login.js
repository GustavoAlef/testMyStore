let loginActions = {
  using: function (email, senha, username) {
    return this
      .navigate()
      .waitForElementPresent("@formLogin", 3000)
      .setValue("@inputEmail", email)
      .setValue("@inputPwd", senha)
      .click("@btnSignIn")
      .waitForElementPresent('@userInfo', 3000)
      .assert.containsText('@userInfo', username)
      .pause(1000);
  }
};

module.exports = {
  url: "/index.php?controller=authentication",
  commands:[loginActions],
  elements: {
    formLogin: "form#login_form",
    inputEmail: "input#email",
    inputPwd: "input#passwd",
    btnSignIn: "button#SubmitLogin",
    userInfo: "nav > div:nth-of-type(1)"
  }
};
