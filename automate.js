const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000',{waitUntil: 'networkidle2'})
  // await delay(1000)
  await page.setViewport({
    width: 1920,
    height : 1080
  })
  await page.waitForTimeout('input[name=inputA]')
  await page.waitForTimeout('input[name=inputB]')
  await page.$eval('input[name=inputA]', el => el.value = 'hello')
  await page.screenshot({path: 'inputA.jpeg',quality:100})
  await page.$eval('input[name=inputB]', el => el.value = 'world')
  await page.screenshot({path: 'inputB.jpeg',quality:100})
  await page.select('select[name="tel"]', 'en')
  await page.screenshot({path: 'select.jpeg',quality:100})

  await browser.close()
})()

