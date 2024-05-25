const { pages, HomePage } = require("./../po");

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

    //results = pages("results");
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
    await homePage.magnifyingGlass.click(); //3. Perform the search.
    // 3. Perform the search
    await homePage.inputSearch.addValue(
      "Google Cloud Platform Pricing Calculator"
    );
    await browser.keys("Enter");
    // 4. Click "Google Cloud Platform Pricing Calculator" in the search results and go to the calculator page.
    await resultsPage.searchResult.click();
    // click on add to estimate
    await pricingCalculatorPage.addToEstimateBtn.click();
    // 5. Click COMPUTE ENGINE at the top of the page.
    await pricingCalculatorPage.computeEngineCard.waitForClickable({
      timeout: 5000,
    });
    await pricingCalculatorPage.computeEngineCard.click();
    // // 6. Fill out the form with the following data:
    // //    - Number of instances: 4
    await computeEngineFormPage.form.numberOfInstances.setValue("4");
    // // //Select the OS dropdown - Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
    const element = await computeEngineFormPage.form.selectOSDropdown;
    await element.waitForDisplayed({ timeout: 5000 });
    await element.scrollIntoView({ block: "center", inline: "center" });
    await element.click();
    await computeEngineFormPage.form.noRecuerdo.click();

    // validate regular button from Provisioning Model
    await expect(computeEngineFormPage.form.buttonRegular).toExist();

    // validate the Machine Family: Memory-optimized  dropdown
    await expect(computeEngineFormPage.form.machineFamilyDropdown).toExist();
    await expect(computeEngineFormPage.form.generalPurposeOption).toExist();

    // validate    - Series: N1
    await expect(computeEngineFormPage.form.seriesDropdown).toExist();
    await expect(computeEngineFormPage.form.N1Option).toExist();

    // // // Machine type* dropdown
    // click on machine type an open the list
    await computeEngineFormPage.form.machineTypeDropdown.click();
    // click on 'n1-standard-2' option
    await computeEngineFormPage.form.n1Standar2.click();

    // // validate to exist - Select “Add GPUs“
    await expect(
      $("button[jsname='DMn7nd'][aria-label='Add GPUs'] span.eBlXUe-hywKDc")
    ).toExist();
    // - Select “Add GPUs“
    await $(
      "button[jsname='DMn7nd'][aria-label='Add GPUs'] span.eBlXUe-hywKDc"
    ).click();

    // // validate to exist - Select “Add GPUs“
    // await expect(computeEngineFormPage.form.addGPUS).toExist();
    // // - Select “Add GPUs“
    // await $(computeEngineFormPage.form.addGPUS).waitForClickable({ timeout: 5000 });
    // await $(computeEngineFormPage.form.addGPUS).click();

    // // click on GPU MODEL
    await computeEngineFormPage.form.GPUmodelDropdown.click();
    // select _ GPU type: NVIDIA Tesla V100
    await computeEngineFormPage.form.NVIDIATeslaP4Option.click();

    // // click on Number of GPUs: 1
    await computeEngineFormPage.form.numberOfGPUsDropdown.click();
    // select Number of GPUs: 2
    await computeEngineFormPage.form.twoGPUsOption.click();

    // // click on  - Local SSD:
    await computeEngineFormPage.form.localSSDDropdown.click();
    // select  - Local SSD: 2x375 Gb
    await computeEngineFormPage.form.twox375.click();

    // Click on region - Datacenter location:
    await computeEngineFormPage.form.regionDropdown.click();
    // Select - Datacenter location: Northern Virginia (us-east4)
    await computeEngineFormPage.form.northernVirginiaDataCenterOption.click();

    // - Committed usage: 1 Year
    await computeEngineFormPage.form.commitedUsage.click();

    //7. valudate - 'Add to Estimate'.  //modified step
    await expect(computeEngineFormPage.form.addToEstimateSubmit).toExist();

    // 8. Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month”
    await expect(computeEngineFormPage.estimatedCost).toHaveText("2.637,35 $");
    // 9. click "Share" to see Total estimated cost
    await computeEngineFormPage.shareButton.click();

    // 10. click "Open estimate summary" to see Cost Estimate Summary, will be opened in separate tab browser.
    await computeEngineFormPage.openEstimateSummary.waitForClickable({
      timeout: 5000,
    });
    await computeEngineFormPage.openEstimateSummary.click();

    // 11. verify that the 'Cost Estimate Summary' matches with filled values in Step 6.
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);

    const machineType = await costEstimateSummaryPage.machineType;
    await expect(machineType).toHaveText(
      "n1-standard-2, vCPUs: 2, RAM: 7.5 GB"
    );
    //validate Operating System / Software Paid: SLES
    await expect(costEstimateSummaryPage.operatingSystem).toHaveText(
      "Paid: SLES"
    );
    //validate GPU Model NVIDIA TESLA P4
    await expect(costEstimateSummaryPage.gpuModel).toHaveText(
      "NVIDIA TESLA P4"
    );
    //validate Number of GPUs 2
    await expect(costEstimateSummaryPage.numberOfGPUs).toHaveText("2");
    //validate Local SSD 2x375 GB
    await expect(costEstimateSummaryPage.localSSD).toHaveText("2x375 GB");
    //validate Number of Instances 4
    await expect(costEstimateSummaryPage.numberOfInstances).toHaveText("4");
    // validate Provisioning Model Regular
    await expect(costEstimateSummaryPage.provisingModelRegular).toHaveText(
      "Regular"
    );
    // validate Add GPUs true
    await expect(costEstimateSummaryPage.addGPUSSwitch).toHaveText("true");
    // Region Northern Virginia (us-east4)
    await expect(costEstimateSummaryPage.regionDataCenter).toHaveText(
      "Northern Virginia (us-east4)"
    );
    // Committed use discount options 1 year
    await expect(costEstimateSummaryPage.discountTime).toHaveText("1 year");
    // validate Total estimated cost 34.682,76 $ $/ mo
    await expect(costEstimateSummaryPage.totalCost).toHaveText("2637,35 $");
  });
});
