const { Builder, By, Key } = require("selenium-webdriver");

async function test() {
  let driver = await new Builder().forBrowser("firefox").build();

  await driver.get("https://www.saucedemo.com/");
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
  await driver.findElement(By.id("login-button")).click();
  await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
  await driver
    .findElement(By.id("add-to-cart-sauce-labs-fleece-jacket"))
    .click();
  await driver.findElement(By.className("shopping_cart_link")).click();
  await driver.findElement(By.id("checkout")).click();

  await driver.findElement(By.id("first-name")).sendKeys("Muhammad Fahim");
  await driver.findElement(By.id("last-name")).sendKeys("2018831064");
  await driver.findElement(By.id("postal-code")).sendKeys("OKKK");

  await driver.findElement(By.id("continue")).click();
  await driver.findElement(By.id("finish")).click();
}
test();
