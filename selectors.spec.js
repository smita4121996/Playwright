import playwrightConfig from "../playwright.config";
import {test,expect} from '@playwright/test'

test('Selectors Demo',async({page})=>{
    await page.goto('https://saucedemo.com/')
    await page.pause()
    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('smita')

})