const { By } = require("selenium-webdriver/lib/by");
const { Key } = require("selenium-webdriver/lib/input");

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async navigate() {
    await this.driver.get(
      "https://accounts.shi.com/Account/ShiComLogin?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DSHI.COM%26response_mode%3Dform_post%26response_type%3Dcode%2520id_token%2520token%26scope%3Dopenid%2520email%2520profile%2520SHICOM%2520offline_access%26state%3DOpenIdConnect.AuthenticationProperties%253DsNdNNwwfisSgN8m-m2tSTe4RBvDi5aprW8hYHYkwCEFLQ-9Ow8st6QQummMrVGLOME44FYHqQtez29FferZHcrXFM9yQ3hiDQVQeG6_fmAzVaZ2uxKASYMqXV8hOvufS_F3mNcXLDD-Lrr0-hSopkeyDWGZf2Mo1G5gdKvgBw32IV-qX%26nonce%3D638518458041140783.ZDYwMjdkNTktZmQ5ZS00Yzk1LTk3MGMtMjFhYjE3MGUwMmNiZWVlODcxZjAtOGQ3Yy00YWJmLTgwYWYtYzE0NGNkNDAwNjdl%26redirect_uri%3Dhttps%253A%252F%252Fwww.shi.com%252FSecurityAuth%252Fhome%252FLoginCheck%26post_logout_redirect_uri%3Dhttps%253A%252F%252Fwww.shi.com%252FSecurityAuth%252Fhome%252FLogoutRedirect%26ui_locales%3Den%26prompt%3Dlogin%26suppressed_prompt%3Dlogin"
    );
  }

  async submitLogin() {
    await this.driver.findElement(By.id("username")).sendKeys("somramnani");
    await this.driver
      .findElement(By.id("PasswordInput"))
      .sendKeys("fakepassword");

    await this.driver
      .findElement(By.css(".btn.btn-lg.btn-success.w-100.mb-3"))
      .click();
  }
}

module.exports = LoginPage;
