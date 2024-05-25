const BaseComponent = require("./../common/base.component");

class ProductsDialogComponent extends BaseComponent {
  constructor() {
    super("div[jsname='rZHESd']");
  }
  get computeEngineCard() {
    return this.rootEl.$(
      "// div[@class='VobRQb'][1] // div[@class='aHij0b-WsjYwc aHij0b-WsjYwc-OWXEXe-wdeprb-MD85tf-DKzjMe b9Ejl']"
    );
  }

  get title() {
    return this.rootEl.$("//h3[.='Add to this estimate']");
  }

  get searchProductsInput() {
    return this.rootEl.$("input#c2[jsname='YPqjbf']");
  }
}

module.exports = ProductsDialogComponent;
