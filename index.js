//const webdriver = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

/*
let el = await driver.findElement(By.id(`import-file-acqId:${acqId}`));
await driver.wait(until.elementIsVisible(el),100);
await el.sendKeys(file);
*/
//const xPathClicked = xPath.click();
//await xPathBuyClicked;

const example3 = async () => {

  let driver = await new Builder().forBrowser('chrome').build();

  try {      

    await driver.get('https://www.net-a-porter.com/en-gb/shop/product/saint-laurent/bags/shoulder-bags/gaby-quilted-leather-shoulder-bag/20346390236017055');// Navigate to Url 

    setTimeout(async function(){ 
    const xPathBuy = await driver.findElement(By.xpath('/html/body/main/div/div[2]/div/div[1]/div[2]/div[8]/div[1]/button'));  
    const xPathBuyClicked = await driver.wait(until.elementIsVisible(xPathBuy), 1000).click();
    }, 0);

    setTimeout(async function(){ 
        const xPathAddToCheckout = await driver.findElement(By.xpath( '//*[@id="header"]/div/div[3]/div/div[4]/div[2]/div[2]/div/div/div/a'));
        const xPathCheckoutClicked = await driver.wait(until.elementIsVisible(xPathAddToCheckout), 1000).click();
     }, 2000);

       setTimeout(async function(){ 
        const xPathCheckoutContinue = await driver.findElement(By.xpath('/html/body/div[2]/div/main/div/div/div[2]/div/div[2]/div[2]/div/a'));
        const xPathCheckoutContinueClicked = await driver.wait(until.elementIsVisible(xPathCheckoutContinue), 1000).click();
     }, 6000);

    // setTimeout(async function(){ 
    //     const xPathSignInOption = await driver.findElement(By.name("hasAccount")).click();
    //     //const yo = await driver.wait(until.elementIsVisible(xPathSignInOption), 2000)
    // }, 12000);
    
  } catch (error) {
    console.error(error);
  }

}

example3();
//driver.execute_script("arguments[0].click();", WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "label[for='documentType-0']"))))


// const example3 = async () => {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try {      
  
//       await driver.get('https://www.net-a-porter.com/en-gb/shop/product/saint-laurent/bags/shoulder-bags/gaby-quilted-leather-shoulder-bag/20346390236017055');// Navigate to Url 
  
//       const xPathBuy = await driver.findElement(By.xpath('/html/body/main/div/div[2]/div/div[1]/div[2]/div[8]/div[1]/button'));
//       const xPathCheckout = await driver.findElement(By.xpath( '//*[@id="header"]/div/div[3]/div/div[4]/div[2]/div[2]/div/div/div/a'));
  
  
//       const xPathBuyClicked = await driver.wait(until.elementIsVisible(xPathBuy), 1000).click();
//       const xPathCheckoutClicked = await driver.wait(until.elementIsVisible(xPathCheckout), 2000).click();
  
  
      
  
      
  
//     } catch (error) {
//       console.error(error);
//     }
  
//   }
  
//   example3();