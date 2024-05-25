const BasePage = require("./base.page");

class CostEstimateSummaryPage extends BasePage {
  constructor() {
    super(
      "/products/calculator/estimate-preview/76f57eb8-0163-4e3a-8345-8dd1bceea815?hl=es"
    );
  }

  get machineType() {
    return $("(//span[contains(@class,'Kfvdz')])[3]");
  }

  get operatingSystem() {
    return $("//span[contains(text(),'Paid: SLES')]");
  }

  get gpuModel() {
    return $("//span[contains(text(),'NVIDIA TESLA P4')]");
  }

  get numberOfGPUs() {
    return $("//span[.='Number of GPUs']/following-sibling::span[1]");
  }

  get localSSD() {
    return $("//span[.='2x375 GB']");
  }

  get numberOfInstances() {
    return $("//span[.='Number of Instances']/following-sibling::span[1]");
  }

  get provisingModelRegular() {
    return $("//span[.='Provisioning Model']/following-sibling::span[1]");
  }

  get addGPUSSwitch() {
    return $("//span[.='true']");
  }

  get regionDataCenter() {
    return $("//span[.='Northern Virginia (us-east4)']");
  }

  get discountTime() {
    return $("//span[.='1 year']");
  }

  get totalCost() {
    return $("//h6[.='Total estimated cost']/following::h6[1]");
  }
}

module.exports = CostEstimateSummaryPage;
