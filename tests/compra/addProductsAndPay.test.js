module.exports = {
  "@tags": ["addp"],

  "Dado eu estiver logado no site": browser => {
    let pgobj = browser.page.login();

    pgobj.using("simao.citrino@email.com.br", "12345", "Simao Citrino");
  },

  'Quando eu for para a pagina principal e adicionar os produtos "Best Sellers" ao carrinho': browser => {
    let pgobj = browser.page.products();

    pgobj.addItens();
  },

  "Entao eu continuo o processo da compra": browser => {
    let pgobj = browser.page.products();

    pgobj
      .address()
      .ship()
      .pay("Your order on My Store is complete.")
      .pause(2000);
  }
};
