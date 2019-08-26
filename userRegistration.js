const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
  await page.waitForSelector('.container');
  await page.type('input[formcontrolname="firstName"]', 'Primer nombre ejemplo');
  await page.type('input[formcontrolname=lastName]', 'Primer Apellido ejemplo');
  await page.type('input[formcontrolname="username"]', 'nombreusuario');
  await page.type('input[formcontrolname="password"]', 'password');
  await page.click('button[class="btn btn-primary"]');
  await page.waitForSelector('.alert-success');
  await page.screenshot({path: 'registrationTest.png'});
  await browser.close();
})();