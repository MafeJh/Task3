const { pages } = require("./../po");
const { datasets } = require("../utils");
const env = process.env.NODE_ENV;

describe(`${env.toUpperCase()}: Google Cloud Computing Page E2E Test`, () => {
  let homePage = null;
  let resultsPage = null;
  let pricingCalculatorPage = null;
  let computeEngineFormPage = null;
  let costEstimateSummaryPage = null;
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

  it("Create a Service in GCP", async () => {
    const formData = dataset.compute_engine_form;
    // 2. Click on the icon at the top of the portal page and enter "Google Cloud Platform Pricing Calculator" into the search field.
    await homePage.clickOnSearchIconButton();
    // 3. Perform the search
    await homePage.performSearch(dataset.home_google_cloud.pricing_calculator);
    // 4. Click "Google Cloud Platform Pricing Calculator" in the search results and go to the calculator page.
    await resultsPage.clickOnSearchResult();
    // Click on add to estimate
    await pricingCalculatorPage.clickOnAddToEstimate();
    // Validate the title and search products input from the dialog
    await pricingCalculatorPage.validateDialogElements();
    // 5. Click COMPUTE ENGINE at the top of the page.
    await pricingCalculatorPage.clickOnComputeEngineCard();
    //  6. Fill out the form with the following data:
    // Number of instances
    await computeEngineFormPage.setInstances(formData.instances);
    // Select the OS dropdown - Operating System / Software
    await computeEngineFormPage.selectOperatingSystem(
      formData.operating_system
    );
    // Click on Provisioning Model
    await computeEngineFormPage.clickOnProvisioningModel(
      formData.provisional_model
    );
    // Select the Machine Family
    await computeEngineFormPage.selectMachineFamily(formData.machine_family);
    // Select Machine Type Series
    await computeEngineFormPage.selectMachineSeries(formData.machine_series);
    // Select Machine Type
    await computeEngineFormPage.selectMachineType(formData.machine_type);

    // Toggle Add GPUs
    await computeEngineFormPage.toggleAddGPUs();
    // Select GPU Model
    await computeEngineFormPage.selectGPUModel(formData.GPU_Model);
    // Select Number of GPUs
    await computeEngineFormPage.selectNumberOfGPUs(formData.GPUs);
    // Select Local SSD
    await computeEngineFormPage.selectLocalSSD(formData.local_SSD);
    // Select - Data center location
    await computeEngineFormPage.selectRegion(formData.region_data_center);
    // Click on committed usage
    await computeEngineFormPage.clickOnCommittedUsageButton(
      formData.committed_usage
    );
    // 7. Validate - 'Add to Estimate'. - Modified step
    await computeEngineFormPage.validateAddToEstimateButtonSubmit();
    // 8. Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month”
    await computeEngineFormPage.validateEstimatedCost(
      dataset.compute_engine_form
    );
    // 9. click "Share" to see Total estimated cost
    await computeEngineFormPage.clickOnShareButton();
    // 10. click "Open estimate summary" to see Cost Estimate Summary, will be opened in separate tab browser.
    await computeEngineFormPage.goToEstimatedSummary();
    // 11. verify that the 'Cost Estimate Summary' matches with filled values in Step 6.
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await costEstimateSummaryPage.validateCostEstimatedSummary(
      dataset.cost_estimated_summary
    );
  });
});
