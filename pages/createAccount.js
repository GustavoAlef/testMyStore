let actions = {
  goToForm: function(email) {
    return this
      .navigate()
      .waitForElementPresent("@homeSlider", 3000)
      .click("@btnSignIn")
      .waitForElementPresent("@formCreate", 3000)
      .setValue("@inputEmail", email)
      .click("@btnCreateAccount")
      .pause(1000);
  },

  fillForm: function(textoForm, firstName, lastName, password, address, city, zipCode, mobilePhone, addressAlias) {
    return this
        .waitForElementPresent("@formPersonal", 3000)
        .assert.containsText("@formPersonal", textoForm)
        .setValue("@inputFirstName", firstName)
        .setValue("@inputLastName", lastName)
        .setValue("@inputPwd", password)
        .click("@dateDay")
        .click("@dateMonth")
        .click("@dateYear")
        .setValue("@inputAddress", address)
        .setValue("@inputCity", city)
        .click("@slcState")
        .setValue("@inputZipCode", zipCode)
        .setValue("@inputMobilePhone", mobilePhone)
        .clearValue("@inputAlias")
        .setValue("@inputAlias", addressAlias)
        .click("@btnRegister")
  }
};

module.exports = {
  url: "/index.php",
  commands: [actions],
  elements: {
    homeSlider: "ul#homeslider",
    formCreate: "form#create-account_form",
    formPersonal: "form#account-creation_form",

    radioButton: "div:nth-of-type(1) > .top",
    inputEmail: "input#email_create",
    inputFirstName: "input#customer_firstname",
    inputLastName: "input#customer_lastname",
    inputPwd: "input#passwd",
    dateDay: "select#days > option[value='1']",
    dateMonth: "select#months > option[value='4']",
    dateYear: "select#years > option[value='2019']",
    inputAddress: "input[name='address1']",
    inputCity: "input#city",
    slcState: "select#id_state > option[value='1']",
    inputZipCode: "input#postcode",
    inputMobilePhone: "input#phone_mobile",
    inputAlias: "input#alias",

    btnSignIn: "a.login",
    btnCreateAccount: "button#SubmitCreate",
    btnRegister: "button#submitAccount"
  }
};
