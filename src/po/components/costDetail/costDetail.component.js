const BaseComponent = require("./../common/base.component");

class CostDetailComponent extends BaseComponent {
  constructor() {
    super("div.C7J75c");
  }

  get estimatedCost() {
    return this.rootEl.$("//div[.='Estimated cost']/following::label[1]");
  }

  get shareButton() {
    return this.rootEl.$("//span[contains(text(), 'Share')]");
  }

  get addToEstimateSubmit() {
    return this.rootEl.$("//span[.='Add to estimate']");
  }
}

module.exports = CostDetailComponent;
