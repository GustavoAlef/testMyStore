module.exports = {
  // "@disabled": true,
  "@tags": ["login"],

  "login com sucesso": browser => {
    let pgLogin = browser.page.login();

    pgLogin.using("zxc@email.com", "123asd", "simon citri");
  }
};
