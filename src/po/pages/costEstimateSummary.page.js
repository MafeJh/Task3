const BasePage = require("./base.page");

class CostEstimateSummaryPage extends BasePage {
  constructor() {
    super(
      "/products/calculator/estimate-preview/76f57eb8-0163-4e3a-8345-8dd1bceea815?hl=es"
    );
  }

  get machineType() {
    return $("//span[.='Machine type']/following-sibling::span[1]");
  }

  get operatingSystem() {
    return $(
      "//span[.='Operating System / Software']/following-sibling::span[1]"
    );
  }

  get gpuModel() {
    return $("//span[.='GPU Model']/following-sibling::span[1]");
  }

  get numberOfGPUs() {
    return $("//span[.='Number of GPUs']/following-sibling::span[1]");
  }

  get localSSD() {
    return $("//span[.='Local SSD']/following-sibling::span[1]");
  }

  get numberOfInstances() {
    return $("//span[.='Number of Instances']/following-sibling::span[1]");
  }

  get provisioningModel() {
    return $("//span[.='Provisioning Model']/following-sibling::span[1]");
  }

  get addGPUSSwitch() {
    return $("//span[.='Add GPUs']/following-sibling::span[1]");
  }

  get regionDataCenter() {
    return $("//span[.='Region']/following-sibling::span[1]");
  }

  get discountTime() {
    return $(
      "//span[.='Committed use discount options']/following-sibling::span[1]"
    );
  }

  get totalCost() {
    return $("div.EOYkJe");
  }

  async validateCostEstimatedSummary(data) {
    await expect(this.machineType).toHaveText(data.machine_type);
    //validate Operating System / Software Paid
    await expect(this.operatingSystem).toHaveText(data.operating_system);
    //validate GPU Model
    await expect(this.gpuModel).toHaveText(data.GPU_Model);
    //validate Number of GPUs
    await expect(this.numberOfGPUs).toHaveText(data.GPUs);
    //validate Local SSD
    await expect(this.localSSD).toHaveText(data.local_SSD);
    //validate Number of Instances
    await expect(this.numberOfInstances).toHaveText(data.instances);
    // validate Provisioning Model
    await expect(this.provisioningModel).toHaveText(data.provisional_model);
    // validate Add GPUs true
    await expect(this.addGPUSSwitch).toHaveText(data.add_GPUs);
    // Region
    await expect(this.regionDataCenter).toHaveText(data.region_data_center);
    // Committed use discount options
    await expect(this.discountTime).toHaveText(data.discount_time);
    // validate Total estimated cost {amount} $ / mo
    await expect(this.totalCost).toHaveText(data.estimated_cost);
  }
}

module.exports = CostEstimateSummaryPage;
