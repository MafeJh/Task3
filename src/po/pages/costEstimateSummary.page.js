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

  get provisioningModelRegular() {
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
    return $("div.EOYkJe");
  }

  async validateCostEstimatedSummary(data) {
    await expect(this.machineType).toHaveText(data.n1_standard_2);
    //validate Operating System / Software Paid: SLES
    await expect(this.operatingSystem).toHaveText(data.operating_system);
    //validate GPU Model NVIDIA TESLA P4
    await expect(this.gpuModel).toHaveText(data.GPU_Model);
    //validate Number of GPUs 2
    await expect(this.numberOfGPUs).toHaveText(data.GPUs);
    //validate Local SSD 2x375 GB
    await expect(this.localSSD).toHaveText(data.localSSD);
    //validate Number of Instances 4
    await expect(this.numberOfInstances).toHaveText(data.instances);
    // validate Provisioning Model Regular
    await expect(this.provisioningModelRegular).toHaveText(
      data.provisional_model
    );
    // validate Add GPUs true
    await expect(this.addGPUSSwitch).toHaveText(data.add_GPUs);
    // Region Northern Virginia (us-east4)
    await expect(this.regionDataCenter).toHaveText(data.region_data_center);
    // Committed use discount options 1 year
    await expect(this.discountTime).toHaveText(data.discount_time);
    // validate Total estimated cost 2637,35 $ / mo
    const costEstimatedText = await this.totalCost;
    const costEstimatedTextExpected = "Total estimated cost\n2637,35 $/ mo";
    await expect(costEstimatedText).toHaveText(costEstimatedTextExpected);
  }
}

module.exports = CostEstimateSummaryPage;
