const BaseComponent = require("./../common/base.component");

class ProductsDialogComponent extends BaseComponent {
  constructor() {
    super("div[jsname='rZHESd']");
  }
  get computeEngineCard() {
    return this.rootEl.$("//h2[contains(text(),'Compute Engine')]");
  }

  get title() {
    return this.rootEl.$("//h3[.='Add to this estimate']");
  }

  get searchProductsInput() {
    return this.rootEl.$("input#c2[jsname='YPqjbf']");
  }
}

module.exports = ProductsDialogComponent;
