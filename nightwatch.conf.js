require("babel-core/register");

const chromedriver = require("chromedriver");
require('geckodriver')

const testUrl = 'http://automationpractice.com'

module.exports = {
  src_folders: ["tests"],

  page_objects_path: "./pages",

  globals_path: "./hooks/globals.js",

  webdriver: {
    start_process: true,
  },

  test_settings: {
    default: {
      launch_url: testUrl,
      webdriver:{
        server_path: chromedriver.path,
        port: 9515
      },
      desiredCapabilities: {
        browserName: "chrome"
      }
    },

    headless: {
      launch_url: testUrl,
      webdriver:{
        server_path: chromedriver.path,
        port: 9515
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions:{
          w3c: false,
          args:['--headless', '--no-sandbox']
        }
      }
    },

    firefox: {
      launch_url: testUrl,
      webdriver:{
        server_path: './node_modules/.bin/geckodriver',
        port: 4444
      },
      desiredCapabilities: {
        browserName: "firefox",
        acceptInsecureCerts: true
      }
    }
  }
};
