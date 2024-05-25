const HomePage = require("./homeGoogleCloud.page");
const SearchResultsPage = require("./searchResults.page");
const PricingCalculatorPage = require("./pricingCalculator.page");
const ComputeEngineFormPage = require("./computeEngineForm.page");
const CostEstimateSummaryPage = require("./costEstimateSummary.page");
/**
 *
 * @param {*} page {'Home'}
 * @returns {HomePage}
 */
// 'pages' function receive a page argument to return the instance of HomePage
// HomePage has access to all the elements in the form (selector of those elements)
function pages(page) {
  const items = {
    home: new HomePage(),
    results: new SearchResultsPage(),
    pricingCalculator: new PricingCalculatorPage(),
    computeEngineForm: new ComputeEngineFormPage(),
    costEstimateSummary: new CostEstimateSummaryPage(),
  };
  return items[page];
}

module.exports = { pages };
