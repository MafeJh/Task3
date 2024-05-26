const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
  constructor() {
    super("header#kO001e");
  }
  get searchIconButton() {
    return this.rootEl.$("div.YSM5S");
  }

  get searchInput() {
    return this.rootEl.$("input[type='text']");
  }
}

module.exports = HeaderComponent;
