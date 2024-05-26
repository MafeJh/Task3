const BasePage = require("./base.page");

class SearchResultsPage extends BasePage {
  constructor() {
    super(
      "/s/results?q=Google%20Cloud%20Platform%20Pricing%20Calculator&text=Google%20Cloud%20Platform%20Pricing%20Calculator"
    );
  }

  get searchResult() {
    return $("//b[contains(text(),'Google Cloud Pricing Calculator')]");
  }

  async clickOnSearchResult() {
    await this.searchResult.click();
  }
}

module.exports = SearchResultsPage;
