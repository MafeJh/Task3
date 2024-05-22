const { pages } = require("./../po");

describe("Google Cloud Computing Page", () => {
  beforeEach(async () => {
    // 1.
    await pages("home").open();
  });

  it("Create a Service in GCP", async () => {
    // 2 y 3
    await $("div.YSM5S").click();
    await $("input[type='text']").addValue(
      "Google Cloud Platform Pricing Calculator"
    );
    await browser.keys("Enter");
    // 4
    await $("//b[contains(text(),'Google Cloud Pricing Calculator')]").click();
    await $("button.UywwFc-LgbsSe").click();
    // 5
    await $("div.wrzENe div.JREjNb div.VobRQb:first-child").click();
    //Fill out the form
    //   - Number of instances: 4
    await $("div[jsname='nd797b'] div:nth-child(3) button.CXjg4d").click();
    await $("div[jsname='nd797b'] div:nth-child(3) button.CXjg4d").click();
    await $("div[jsname='nd797b'] div:nth-child(3) button.CXjg4d").click();

    //Select the OS dropdown - Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
    const element = await $("(//div[contains(@class,'VfPpkd-aPP78e')])[4]");
    await element.waitForDisplayed({ timeout: 5000 });
    await element.click();
    await browser.keys(["ArrowDown", "ArrowDown", "ArrowDown"]);
    await browser.keys("Enter");

    //validate regular button from Provisioning Model
    await expect($("//label[contains(text(),'Regular')]")).toExist();

    //validate the Machine Family: General purpose  dropdown
    await expect($("div[jsname='Wsw6tc']")).toExist();
    await expect(
      $("div[jsname='Wsw6tc']").$("//span[contains(text(),'General Purpose')]")
    ).toExist();

    // validate    - Series: N1
    await expect($("div[jsname='vGGDlb']")).toExist();
    await expect(
      $("div[jsname='vGGDlb']").$("//span[contains(text(),'N1')]")
    ).toExist();

    // Machine type* dropdown
    // click on machine type an open the list
    await $("div[jsname='kgDJk']").click();
    //  validate the option that we want select exist - Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
    await expect(
      $("div[jsname='kgDJk']").$(
        "//span[contains(text(),'vCPUs: 8, RAM: 30GB')]"
      )
    ).toExist();
    // click on 'n1-standard-8' option
    await $("li[data-value='n1-standard-8']").click();

    // validate to exist - Select “Add GPUs“
    await expect(
      $("button[jsname='DMn7nd'][aria-label='Add GPUs'] span.eBlXUe-hywKDc")
    ).toExist();
    // - Select “Add GPUs“
    await $(
      "button[jsname='DMn7nd'][aria-label='Add GPUs'] span.eBlXUe-hywKDc"
    ).click();

    // click on GPU MODEL
    const elementGPU = await $("//div[contains(@data-field-type,'158')]");
    await (await elementGPU).click();
    // select _ GPU type: NVIDIA Tesla V100
    const optionGPUTeslaT4 = await $("//li[@data-value='nvidia-tesla-p4']");
    await optionGPUTeslaT4.click();

    // click on Number of GPUs: 1
    const elementNumberOfGPU = await $(
      "//div[contains(@data-field-type,'174')]"
    );
    await (await elementNumberOfGPU).click();
    // select Number of GPUs: 2
    const optionQuantityOfGPU = await $(
      "//ul[@aria-label='Number of GPUs']//li[@data-value='2']"
    );
    await optionQuantityOfGPU.click();

    // click on  - Local SSD:
    const elementLocalSSD = await $("//div[contains(@data-field-type,'180')]");
    await (await elementLocalSSD).click();
    // select  - Local SSD: 2x375 Gb
    const optionLocalSSD = await $(
      "//ul[@aria-label='Local SSD']//li[@data-value='2']"
    );
    await optionLocalSSD.click();

    // Click on region - Datacenter location:
    await $("//div[contains(@data-field-type,'115')]").click();
    // Select - Datacenter location: Northern Virginia (us-east4)
    await $("//li[@data-value='us-east4']").click();

    // - Committed usage: 1 Year
    await $("label[for='1-year']").click();

    //7. Click 'Add to Estimate'.  PREGUNTAR SI ESTE PASOS E HACE PORQUE NO ENCAJA
    //await $("//span[contains(text(),'Add to estimate')]").click();

    // 8. Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month”
    await expect($("div.fbc2ib > label")).toHaveText("3.125,32 $");
  });
});
