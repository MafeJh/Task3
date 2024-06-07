const { pages } = require("../po");
const { datasets } = require("../utils");
const env = process.env.NODE_ENV;

describe(`${env.toUpperCase()}: Google Cloud Computing Page Smoke test`, () => {
  let homePage = null;
  let resultsPage = null;
  let pricingCalculatorPage = null;
  let computeEngineFormPage = null;
  let dataset = null;

  beforeEach(async () => {
    // Get dataset
    const environment = process.env.NODE_ENV || "dev";
    dataset = datasets(environment.trim());

    // Instances
    homePage = pages("home");
    resultsPage = pages("results");
    pricingCalculatorPage = pages("pricingCalculator");
    computeEngineFormPage = pages("computeEngineForm");
    costEstimateSummaryPage = pages("costEstimateSummary");
    // Open URL
    await browser.maximizeWindow();
    await browser.deleteCookies();
    await homePage.open();
    //1. Open https://cloud.google.com/.
  });
  afterEach(() => {
    homePage = null;
    resultsPage = null;
    pricingCalculatorPage = null;
    computeEngineFormPage = null;
    costEstimateSummaryPage = null;
    dataset = null;
  });

  it(`Create a Service in GCP`, async () => {
    // 2. Click on the icon at the top of the portal page and enter "Google Cloud Platform Pricing Calculator" into the search field.
    await homePage.clickOnSearchIconButton();
    // 3. Perform the search
    await homePage.performSearch(dataset.home_google_cloud.pricing_calculator);
    // 4. Click "Google Cloud Platform Pricing Calculator" in the search results and go to the calculator page.
    await resultsPage.clickOnSearchResult();
    // Click on add to estimate
    await pricingCalculatorPage.clickOnAddToEstimate();
    // 5. Click COMPUTE ENGINE at the top of the page.
    await pricingCalculatorPage.clickOnComputeEngineCard();
    //  6. Validate the items in the form Exist:
    //     Validate number of instances
    await expect(computeEngineFormPage.form.numberOfInstances).toExist();
    // Validate OS dropdown - Operating System / Software: paid-sles OS
    await expect(computeEngineFormPage.form.operatingSystemDropdown).toExist();
    // validate Machine Type Series
    await expect(computeEngineFormPage.form.machineSeriesDropdown).toExist();
    // validate Machine Type
    await expect(computeEngineFormPage.form.machineTypeDropdown).toExist();
    // Toggle Add GPUs -> Because this displayed the other options to verify
    await computeEngineFormPage.toggleAddGPUs();
    // validate GPU Model
    await expect(computeEngineFormPage.form.gpuModelDropdown).toExist();
    // validate Number of GPUs
    await expect(computeEngineFormPage.form.numberOfGPUsDropdown).toExist();
    // validate Local SSD
    await expect(computeEngineFormPage.form.localSSDDropdown).toExist();
    // validate - Data center location
    await expect(computeEngineFormPage.form.regionDropdown).toExist();
    // validate on committed usage
    await expect(computeEngineFormPage.form.committedUsage(3)).toExist();
    // Validate - 'Add to Estimate'. - Modified step
    await computeEngineFormPage.validateAddToEstimateButtonSubmit();
    // click "Share" to see Total estimated cost
    await computeEngineFormPage.clickOnShareButton();
    //  click "Open estimate summary" to see Cost Estimate Summary, will be opened in separate tab browser.
    await computeEngineFormPage.goToEstimatedSummary();
    // verify that the 'Cost Estimate Summary' matches with filled values in Step 6.
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
  });
});
