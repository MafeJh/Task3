const BaseComponent = require("./../common/base.component");

class CostSummaryDialogComponent extends BaseComponent {
  constructor() {
    super("div.bwApif-cnG4Wd");
  }

  get estimatedSummary() {
    return this.rootEl.$("//a[.='Open estimate summary']");
  }
}

module.exports = CostSummaryDialogComponent;
