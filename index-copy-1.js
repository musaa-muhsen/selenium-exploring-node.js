//const webdriver = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

//const driver = new webdriver.Builder().forBrowser('chrome').build();

// const example = async () => {
//     let driver = new webdriver.Builder().forBrowser('chrome').build();
//     await driver.get("https://stackoverflow.com/questions/65104233/unhandledpromiserejectionwarning-elementnotinteractableerror-element-not-inter");
//     //await driver.findElement(webdriver.By.name("q")).sendKeys("Selenium", webdriver.Key.RETURN);
// }   

// example();
// driver is wd 
//*[@id="L2AGLb"]
// driver.
// await send_keys('Manchester')
// function getElementByXpath(path) {
//     return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//   }
  
//   console.log( getElementByXpath('//*[@id="L2AGLb"]') );



// driver.findElement(By.xpath('//*[@id="L2AGLb"]'))
//     .then(span => span.getText())
//     .then(text => console.log(text))




const example2 = async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
      
    await driver.get('http://www.google.com/');// Navigate to Url 
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN); //    // .sendKeys('webdriver', Key.RETURN); Enter text "webdriver" and perform keyboard action "Enter"
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    let xPath = await driver.findElement(By.xpath('//*[@id="L2AGLb"]'));
let xPathTest = xPath.getText();
console.log(await xPathTest)
  } catch (error) {
    console.error(error);
  }
  //finally { //  finallyCode - Block of code to be executed regardless of the try / catch result
    //await driver.quit(); //The driver.quit() statement is required, otherwise the test continues to execute, leading to a timeout. 
 // }
}

example2();