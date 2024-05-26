const HeaderComponent = require("./../components/common/header.component");

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new HeaderComponent();
  }

  open() {
    return browser.url(this.url);
  }
}

module.exports = BasePage;
