const { Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");
const HomePage = require("../pages/home_page");

describe("Home Page tests", function () {
  let driver;
  let homePage;

  this.timeout(30000);

  before(async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    homePage = new HomePage(driver);
  });

  describe("Header and subtopics", function () {
    //Hardware
    it("should click on Hardware topic and subtopic", async function () {
      const id = "47611739";
      const className = "hdr_mn.hw-all";

      await homePage.navigate();
      await homePage.clickTopic(id, className);

      let title = await driver.getTitle();
      assert.equal(
        title,
        "Shop Computer Hardware: Buy Your Computer Hardware With SHI"
      );
    });

    // Software
    it("should click on Software topic and subtopic", async function () {
      const id = "44163098";
      const className = "hdr_mn.sw-all";

      await homePage.navigate();
      await homePage.clickTopic(id, className);

      let title = await driver.getTitle();
      assert.equal(title, "Shop Software | SHI");
    });

    // Partners
    it("should click on Partners topic and subtopic", async function () {
      const id = "57866756";
      const className = "hdr_mn.brand-adob";

      await homePage.navigate();
      await homePage.clickTopic(id, className);

      let title = await driver.getTitle();
      assert.equal(
        title,
        "Adobe | Creative Cloud, DC, Sign | Featured partner"
      );
    });
    after(() => driver && driver.quit());
  });
});
