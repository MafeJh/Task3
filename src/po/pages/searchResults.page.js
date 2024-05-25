const BasePage = require("./base.page");

class SearchResultsPage extends BasePage {
  constructor() {
    super("/?hl=es");
  }

  get searchResult() {
    return $("//b[contains(text(),'Google Cloud Pricing Calculator')]");
  }
}

module.exports = SearchResultsPage;
