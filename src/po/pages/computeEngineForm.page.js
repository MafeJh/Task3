const BasePage = require("./base.page");
const ComputeEngineFormComponent = require("../components/computeEngineForm/computeEngineForm.component");
const CostDetailComponent = require("../components/computeEngineForm/costDetail.component");
const CostSummaryDialogComponent = require("./../components/costSummaryDialog/costSummaryDialog.component");

class ComputeEngineFormPage extends BasePage {
  constructor() {
    super(
      "/products/calculator?hl=es&dl=CiQ3NmY1N2ViOC0wMTYzLTRlM2EtODM0NS04ZGQxYmNlZWE4MTUQCBokRjg5OUI5MUUtMTczMy00ODVELTg3RUEtMDlFMTA5RDg4NTc4"
    );
    this.form = new ComputeEngineFormComponent();
    this.costDetail = new CostDetailComponent();
    this.costSummaryDialog = new CostSummaryDialogComponent();
  }

  async goToEstimatedSummary() {
    await this.costSummaryDialog.estimatedSummary.waitForClickable({
      timeout: 5000,
    });
    await this.costSummaryDialog.estimatedSummary.click();
  }

  async validateEstimatedCost(data) {
    await expect(this.costDetail.estimatedCost).toHaveText(data.estimated_cost);
  }

  async setInstances(value) {
    await this.form.numberOfInstances.setValue(value);
  }

  async clickOnOperatingSystemDropdown() {
    const dropdown = await this.form.operatingSystemDropdown;
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async selectOperatingSystem(operatingSystem) {
    const selectors = {
      sles: "li[data-value='paid-sles']",
    };
    await this.clickOnOperatingSystemDropdown();
    const item = this.form.item(
      this.form.operatingSystemDropdown,
      selectors,
      operatingSystem
    );
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async validateProvisioningModelIsRegular() {
    await expect(this.form.provisioningModelRegular).toExist();
  }

  async clickOnMachineFamilyDropdown() {
    const dropdown = await this.form.machineFamilyDropdown;
    await dropdown.scrollIntoView({ block: "center", inline: "center" });
    await dropdown.click();
  }

  async selectMachineFamily(machineFamily) {
    const selectors = {
      general: "li[data-value='general-purpose']",
    };
    await this.clickOnMachineFamilyDropdown();
    const item = this.form.item(
      this.form.machineFamilyDropdown,
      selectors,
      machineFamily
    );
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async clickOnMachineSeriesDropdown() {
    const dropdown = await this.form.machineSeriesDropdown;
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async selectMachineSeries(machineSeries) {
    const selectors = {
      n1: "li[data-value='n1']",
    };
    await this.clickOnMachineSeriesDropdown();
    const item = this.form.item(
      this.form.machineSeriesDropdown,
      selectors,
      machineSeries
    );
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async clickOnMachineTypeDropdown() {
    const dropdown = await this.form.machineTypeDropdown;
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async selectMachineType(machineType) {
    const selectors = {
      n1_standard_2: "li[data-value='n1-standard-2']",
    };
    await this.clickOnMachineTypeDropdown();
    const item = this.form.item(
      this.form.machineTypeDropdown,
      selectors,
      machineType
    );
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async toggleAddGPUs() {
    await this.form.addGPUs.waitForDisplayed({
      timeout: 5000,
    });
    await this.form.addGPUs.click();
  }

  async clickOnGPUModelDropdown() {
    const dropdown = await this.form.gpuModelDropdown;
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async selectGPUModel(model) {
    const selectors = {
      nvidia_tesla_p4: "li[data-value='nvidia-tesla-p4']",
    };
    await this.clickOnGPUModelDropdown();
    const item = this.form.item(this.form.gpuModelDropdown, selectors, model);
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async clickOnNumberOfGPUsDropdown() {
    const dropdown = await this.form.numberOfGPUsDropdown;
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async selectNumberOfGPUs(number) {
    const selectors = {
      2: "li[data-value='2']",
    };
    await this.clickOnNumberOfGPUsDropdown();
    const item = this.form.item(
      this.form.numberOfGPUsDropdown,
      selectors,
      number
    );
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async clickOnNumberOfGPUsDropdown() {
    const dropdown = await this.form.numberOfGPUsDropdown;
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async selectNumberOfGPUs(number) {
    const selectors = {
      2: "li[data-value='2']",
    };
    await this.clickOnNumberOfGPUsDropdown();
    const item = this.form.item(
      this.form.numberOfGPUsDropdown,
      selectors,
      number
    );
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async clickOnLocalSSDDropdown() {
    const dropdown = await this.form.localSSDDropdown;
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async selectLocalSSD(localSSD) {
    const selectors = {
      "2x375": "li[data-value='2']",
    };
    await this.clickOnLocalSSDDropdown();
    const item = this.form.item(
      this.form.localSSDDropdown,
      selectors,
      localSSD
    );
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async clickOnRegionDropdown() {
    const dropdown = await this.form.regionDropdown;
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async selectRegion(region) {
    const selectors = {
      "us-east4": "li[data-value='us-east4']",
    };
    await this.clickOnRegionDropdown();
    const item = this.form.item(this.form.regionDropdown, selectors, region);
    await item.waitForDisplayed({ timeout: 5000 });
    await item.click();
  }

  async clickOnCommittedUsageButton() {
    const button = await this.form.committedUsage;
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }

  async validateAddToEstimateButtonSubmit() {
    await expect(this.costDetail.addToEstimateSubmit).toExist();
  }

  async clickOnShareButton() {
    const button = await this.costDetail.shareButton;
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
  }
}

module.exports = ComputeEngineFormPage;
