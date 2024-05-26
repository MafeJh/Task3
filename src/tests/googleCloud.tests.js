const { pages } = require("./../po");
const dataset = require("../utils/google-cloud-computing.dataset.json");

describe("Google Cloud Computing Page", () => {
  let homePage = null;
  let resultsPage = null;
  let pricingCalculatorPage = null;
  let computeEngineFormPage = null;
  let costEstimateSummaryPage = null;

  beforeEach(async () => {
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
  });

  it("Create a Service in GCP", async () => {
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
    //     - Number of instances: 4
    await computeEngineFormPage.setInstances(
      dataset.compute_engine_form.instances
    );
    // Select the OS dropdown - Operating System / Software: paid-sles OS
    await computeEngineFormPage.selectOperatingSystem("sles");
    // validate regular button from Provisioning Model
    await computeEngineFormPage.validateProvisioningModelIsRegular();
    // Select the Machine Family: General purpose dropdown
    await computeEngineFormPage.selectMachineFamily("general");
    // Select Machine Type Series: N1
    await computeEngineFormPage.selectMachineSeries("n1");
    // Select Machine Type: n1-standard-2
    await computeEngineFormPage.selectMachineType("n1_standard_2");
    // Toggle Add GPUs
    await computeEngineFormPage.toggleAddGPUs();
    // Select GPU Model: NVIDIA Tesla P4
    await computeEngineFormPage.selectGPUModel("nvidia_tesla_p4");
    // Select Number of GPUs: 2
    await computeEngineFormPage.selectNumberOfGPUs("2");
    // Select Local SSD: 2x375 Gb
    await computeEngineFormPage.selectLocalSSD("2x375");
    // Select - Data center location: Northern Virginia (us-east4)
    await computeEngineFormPage.selectRegion("us-east4");
    // Click on committed usage: 1 Year
    await computeEngineFormPage.clickOnCommittedUsageButton();
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
