const { By } = require("selenium-webdriver/lib/by");

class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  async navigate() {
    await this.driver.get("https://www.shi.com/");
  }

  async clickTopic(id, className) {
    const topic = await this.driver.findElement(By.id(id));
    const subTopic = await this.driver.findElement(By.className(className));

    await topic.click();
    await subTopic.click();
  }
}

module.exports = HomePage;
