const BasePage = require("./base.page");

class PricingCalculatorPage extends BasePage {
  constructor() {
    super("/?hl=es");
  }
  get addToEstimateBtn() {
    return $(
      "//div[@class='Gxwdcd'] //span[contains(text(),'Add to estimate')]"
    );
  }

  get computeEngineCard() {
    return $(
      "// div[@class='VobRQb'][1] // div[@class='aHij0b-WsjYwc aHij0b-WsjYwc-OWXEXe-wdeprb-MD85tf-DKzjMe b9Ejl']"
    );
  }
}
module.exports = PricingCalculatorPage;
