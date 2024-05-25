const BasePage = require("./base.page");
const ComputeEngineFormComponent = require("../components/computeEngineForm/computeEngineForm.component");

class ComputeEngineFormPage extends BasePage {
  constructor() {
    super(
      "/products/calculator?hl=es&dl=CiQ3NmY1N2ViOC0wMTYzLTRlM2EtODM0NS04ZGQxYmNlZWE4MTUQCBokRjg5OUI5MUUtMTczMy00ODVELTg3RUEtMDlFMTA5RDg4NTc4"
    );
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
}

module.exports = ComputeEngineFormPage;
