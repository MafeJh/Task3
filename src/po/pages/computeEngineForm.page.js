const BasePage = require("./base.page");
const ComputeEngineFormComponent = require("./../components/compute-engine-form/computeEngineForm.component");

class ComputeEngineFormPage extends BasePage {
  constructor() {
    super("/?hl=es");
    this.form = new ComputeEngineFormComponent();
  }

  get estimatedCost() {
    return $("//div[.='Estimated cost']/following::label[1]");
  }

  get shareButton() {
    return $("//span[contains(text(), 'Share')]");
  }

  get openEstimateSummary() {
    return $("//a[.='Open estimate summary']");
  }
  get() {}
  get() {}
}

module.exports = ComputeEngineFormPage;
