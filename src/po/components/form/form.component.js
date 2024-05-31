const BaseComponent = require("./../common/base.component");

class FormComponent extends BaseComponent {
  constructor() {
    super("div.vHartc");
  }
  get numberOfInstances() {
    return this.rootEl.$("div[data-field-type='102']  input[value='1']");
  }

  get operatingSystemDropdown() {
    return this.rootEl.$("//div[@data-field-type='106']");
  }

  provisioningModel(provisioningModel) {
    const selectors = {
      regular: "input#regular[type='radio'] + label",
      spot: "input#spot[type='radio'] + label",
    };
    return this.rootEl.$(selectors[provisioningModel]);
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

  committedUsage(usage) {
    const selectors = {
      none: "input#none[type='radio'] + label",
      1: "//input[@id='1-year'][@type='radio']/following-sibling::*[1]/self::label",
      3: "//input[@id='3-years'][@type='radio']/following-sibling::*[1]/self::label",
    };
    return this.rootEl.$(selectors[usage]);
  }
}

module.exports = FormComponent;
