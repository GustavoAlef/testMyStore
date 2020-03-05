let userData = {};

module.exports = {
  "@tags": ["createUser"],
  
  before: browser => {
    userData = {
      firstName: "Simao",
      lastName: "Citrino",
      password: 12345,
      address: "R. descubra",
      city: "Descubra",
      zipCode: "54321",
      Country: "United States",
      mobilePhone:"00987654321",
      addressAlias: "endSimao"
    };
  },

  'Dado eu acessar a home page do site': browser => {
    let pgobj = browser.page.createAccount();

    pgobj.goToForm("simao.citrino@email.com.br")
  },

  'Quando eu preencher o formulario de cadastro e continuar': browser => {
    let pgobj = browser.page.createAccount();

    pgobj.fillForm("YOUR PERSONAL INFORMATION",
    userData.firstName, userData.lastName,
    userData.password, userData.address,
    userData.city, userData.zipCode,
    userData.mobilePhone, userData.addressAlias)
  },

  'Entao serei redirecionado para "minha pagina"': browser => {
    let pgobj = browser.page.createAccount();
    pgobj
    .assert.urlContains('my-account')
    .waitForElementPresent('.info-account')
  }
};
