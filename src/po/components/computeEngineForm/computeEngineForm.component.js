const BaseComponent = require("./../common/base.component");

class ComputeEngineFormComponent extends BaseComponent {
  constructor() {
    super("div.vHartc");
  }
  get numberOfInstances() {
    return this.rootEl.$("div[data-field-type='102']  input[value='1']");
  }

  get operatingSystemDropdown() {
    return this.rootEl.$("//div[@data-field-type='106']");
  }

  get provisioningModelRegular() {
    return this.rootEl.$("//label[contains(text(),'Regular')]");
  }

  get machineFamilyDropdown() {
    return this.rootEl.$("div[jsname='Wsw6tc']");
  }

  get machineSeriesDropdown() {
    return this.rootEl.$("div[jsname='vGGDlb']");
  }

  get machineTypeDropdown() {
    return this.rootEl.$("div[jsname='kgDJk']");
  }

  get addGPUs() {
    return this.rootEl.$(
      "button[jsname='DMn7nd'][aria-label='Add GPUs'] span.eBlXUe-hywKDc"
    );
  }

  get gpuModelDropdown() {
    return this.rootEl.$("div[data-field-type='158']");
  }

  get numberOfGPUsDropdown() {
    return this.rootEl.$("div[data-field-type='174']");
  }

  get localSSDDropdown() {
    return this.rootEl.$("div[data-field-type='180']");
  }

  get regionDropdown() {
    return this.rootEl.$("div[data-field-type='115']");
  }

  get committedUsage() {
    return this.rootEl.$("label[for='1-year']");
  }
}

module.exports = ComputeEngineFormComponent;
