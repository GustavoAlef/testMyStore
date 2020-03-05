module.exports = {
  // "@disabled": true,
  "@tags": ["login"],

  "login com sucesso": browser => {
    let pgLogin = browser.page.login();

    pgLogin.using("simao.citrino@email.com.br", "12345", "Simao Citrino");
  }
};
