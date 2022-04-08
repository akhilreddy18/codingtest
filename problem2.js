const { Builder, By } = require('selenium-webdriver')

async function getATags() {
  let url = process.argv.slice(2)[0]
  let driver = await new Builder().forBrowser('firefox').build()
  let tags_array = []

  await driver.get(url)
  let all_tags = await driver.findElements(By.css("a"))
  
  for (tag of all_tags) {
    tags_array.push(await tag.getText())
  }
  
  console.log(tags_array)
  return tags_array
}

getATags()