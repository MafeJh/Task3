const { pages } = require("./../po");

describe("PasteBin Page", () => {
  beforeEach(async () => {
    // 1.
    await pages("home").open();
  });

  it("Create a New Paste", async () => {
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

    //- Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
    const element = await $("(//div[contains(@class,'VfPpkd-aPP78e')])[4]");
    await element.waitForDisplayed({ timeout: 5000 });
    await element.click();
    await browser.keys(["ArrowDown", "ArrowDown", "ArrowDown"]);
    await browser.keys("Enter");

    //validate regular button
    await expect($("//label[contains(text(),'Regular')]")).toExist();
    //validate the Machine Family: General purpose
    await expect($("div[jsname='Wsw6tc']")).toExist();
    await expect(
      $("div[jsname='Wsw6tc']").$("//span[contains(text(),'General Purpose')]")
    ).toExist();

    // validate    - Series: N1
    await expect($("div[jsname='vGGDlb']")).toExist();
    await expect(
      $("div[jsname='vGGDlb']").$("//span[contains(text(),'N1')]")
    ).toExist();

    //    - Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
    await $("div[jsname='kgDJk']").click();
    await expect(
      $("div[jsname='kgDJk']").$("//span[contains(text(),'n1-standard-8')]")
    ).toExist();

    await expect(
      $("div[jsname='kgDJk']").$(
        "//span[contains(text(),'vCPUs: 8, RAM: 30GB')]"
      )
    ).toExist();
    //---hasta aqui funciona

    await $("div[jsname='kgDJk']").$("li[data-value='n1-standard-8']").click();
    // await $("div[jsname='kgDJk']")
    //   .$("//span[contains(text(),'n1-standard-8')]")
    //   .exist();
  });
});
