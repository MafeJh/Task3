const BasePage = require("./base.page");

class HomePage extends BasePage {
  constructor() {
    super("/?hl=es");
  }
}

module.exports = HomePage;
