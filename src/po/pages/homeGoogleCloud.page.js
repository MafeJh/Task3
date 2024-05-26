const BasePage = require("./base.page");

class HomePage extends BasePage {
  constructor() {
    super("/?hl=es");
  }

  async clickOnSearchIconButton() {
    await this.header.searchIconButton.click();
  }

  async performSearch(value) {
    await this.header.searchInput.addValue(value);
    await browser.keys("Enter");
  }
}

module.exports = HomePage;
