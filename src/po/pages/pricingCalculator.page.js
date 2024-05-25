const BasePage = require("./base.page");
const ProductsDialogComponent = require("./../components/pricingCalculator/productsDialog.component");

class PricingCalculatorPage extends BasePage {
  constructor() {
    super("/products/calculator?hl=es");
    this.dialog = new ProductsDialogComponent();
  }
  get addToEstimateBtn() {
    return $(
      "//div[@class='Gxwdcd'] //span[contains(text(),'Add to estimate')]"
    );
  }
}
module.exports = PricingCalculatorPage;
