class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }

  get rootEl() {
    return $(this.rootSelector);
  }

  item(element, selectors, option) {
    return element.$(selectors[option.toLowerCase()]);
  }
}

module.exports = BaseComponent;
