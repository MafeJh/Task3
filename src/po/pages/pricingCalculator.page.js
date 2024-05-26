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

  async clickOnAddToEstimate() {
    await this.addToEstimateBtn.click();
  }

  async validatePricingDialogTitleExists() {
    await this.dialog.title.waitForExist({
      timeout: 5000,
    });
    await expect(this.dialog.title).toExist();
  }

  async validateSearchProductsInputExists() {
    await expect(this.dialog.searchProductsInput).toExist();
  }

  async clickOnComputeEngineCard() {
    await this.dialog.computeEngineCard.waitForClickable({
      timeout: 5000,
    });
    await this.dialog.computeEngineCard.click();
  }

  async validateDialogElements() {
    await this.validatePricingDialogTitleExists();
    await this.validateSearchProductsInputExists();
  }
}
module.exports = PricingCalculatorPage;
