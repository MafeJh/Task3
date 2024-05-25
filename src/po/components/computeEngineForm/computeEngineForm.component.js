const BaseComponent = require("./../common/base.component");

class ComputeEngineFormComponent extends BaseComponent {
  constructor() {
    super("body.yDmH0d");
  }
  get numberOfInstances() {
    return $("div[data-field-type='102']  input[value='1']");
  }

  get selectOSDropdown() {
    return $("//div[@data-field-type='106']");
  }

  get osSLES() {
    return $("li[data-value='paid-sles']");
  }

  get buttonRegular() {
    return $("//label[contains(text(),'Regular')]");
  }

  get machineFamilyDropdown() {
    return $("div[jsname='Wsw6tc']");
  }

  get generalPurposeOption() {
    return $("//span[contains(text(),'General Purpose')]");
  }

  get seriesDropdown() {
    return $("div[jsname='vGGDlb']");
  }

  get N1Option() {
    return $("//span[contains(text(),'N1')]");
  }

  get machineTypeDropdown() {
    return $("div[jsname='kgDJk']");
  }

  get n1Standar2() {
    return $("li[data-value='n1-standard-2']");
  }

  get addGPUS() {
    return $(
      "button[jsname='DMn7nd'][aria-label='Add GPUs'] span.eBlXUe-hywKDc"
    );
  }

  get GPUmodelDropdown() {
    return $("//div[contains(@data-field-type,'158')]");
  }

  get NVIDIATeslaP4Option() {
    return $("//li[@data-value='nvidia-tesla-p4']");
  }

  get numberOfGPUsDropdown() {
    return $("//div[contains(@data-field-type,'174')]");
  }

  get twoGPUsOption() {
    return $("//ul[@aria-label='Number of GPUs']//li[@data-value='2']");
  }

  get localSSDDropdown() {
    return $("//div[contains(@data-field-type,'180')]");
  }

  get twox375() {
    return $("//ul[@aria-label='Local SSD']//li[@data-value='2']");
  }

  get regionDropdown() {
    return $("//div[contains(@data-field-type,'115')]");
  }

  get northernVirginiaDataCenterOption() {
    return $("//li[@data-value='us-east4']");
  }

  get commitedUsage() {
    return $("label[for='1-year']");
  }

  get addToEstimateSubmit() {
    return $("//span[.='Add to estimate']");
  }
}

module.exports = ComputeEngineFormComponent;
