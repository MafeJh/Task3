const BasePage = require("./base.page");

class HomePage extends BasePage {
  constructor() {
    super("/?hl=es");
  }
  get magnifyingGlass() {
    return $("div.YSM5S");
  }

  get inputSearch() {
    return $("input[type='text']");
  }

  get searchResult() {
    return $("//b[contains(text(),'Google Cloud Pricing Calculator')]");
  }
}

module.exports = HomePage;
