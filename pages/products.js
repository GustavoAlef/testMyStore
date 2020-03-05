let actions = {
    addItens: function () {
      return this
      .click('@linkLogo')
      .click('@bestSellers')
      .moveToElement('@prod1', 25, 25)
      .pause(1000)
      .click('@btnAddCart')
      .waitForElementPresent('@layerCart', 5000)
      .moveToElement('@cart', 0, 0)
      .click('@cart')
      .waitForElementPresent('@listProducts', 5000)
      .pause(1000)
      .waitForElementPresent('@btnProceed', 5000)
      .click('@btnProceed')
    },
    address: function(){
      return this
      .waitForElementPresent('@btnAdrProceed', 5000)
      .click('@btnAdrProceed')
    },
    ship: function(){
      return this
      .waitForElementPresent('@ckbTerms', 5000)
      .waitForElementPresent('@btnShipProceed', 5000)
      // .moveToElement("ckbTerms")
      .click('@ckbTerms')
      .click('@btnShipProceed')
    },
    pay: function(msg){
      return this
      .waitForElementPresent('@payByBank', 5000)
      .click('@payByBank')
      .click('@btnConfirm')
      .waitForElementPresent('@msgComplete')
      .assert.containsText("@msgComplete", msg)
    }
  };

module.exports = {
    url: "/index.php",
    commands: [actions],
    elements: {
      linkLogo: "div#header_logo > a[title='My Store']",
      bestSellers: "#home-page-tabs .blockbestsellers",
      cart: "a[title='View my shopping cart']",
      layerCart: "div#layer_cart",
      
      btnContinueShop: "a[title='Continue shopping']",
      btnProceed: "div#center_column  a[title='Proceed to checkout']",
      btnAdrProceed: "button[name='processAddress']",      
      btnShipProceed: "button[name='processCarrier']",
            
      listProducts: "table#cart_summary",
      ckbTerms: "label",
      payByBank: "a[title='Pay by bank wire']",
      btnConfirm: "p#cart_navigation > .btn.btn-default.button.button-medium",
      msgComplete: ".cheque-indent",

      prod1: "#blockbestsellers li:nth-of-type(1) [alt]",
      prod2: "#blockbestsellers li:nth-of-type(2) [alt]",
      prod3: "#blockbestsellers li:nth-of-type(3) [alt]",
      prod4: "#blockbestsellers li:nth-of-type(4) [alt]",
      prod5: "#blockbestsellers li:nth-of-type(5) [alt]",
      prod6: "#blockbestsellers li:nth-of-type(6) [alt]",
      prod7: "#blockbestsellers li:nth-of-type(7) [alt]",

      btnAddCart: "ul#blockbestsellers > .ajax_block_product.col-md-3.col-sm-4.col-xs-12.first-in-line.first-item-of-mobile-line.first-item-of-tablet-line > .product-container a[title='Add to cart']",
    }
  };