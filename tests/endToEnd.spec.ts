import {test, expect} from '@playwright/test'
import {pool} from '../src/utils/dbUtils'
import { allure } from 'allure-playwright';


test.describe('end to end tests', ()=>{

test('validate the carts data from DB in automationPractice', async({page})=>{
    await allure.owner('sara')
    await allure.severity('critical')
    await allure.feature('DB testing')
    await allure.story('validate the carts data from DB in automationPractice')
    await allure.step('navigate to the automationexercise website', async()=>{  
    await page.goto('https://automationexercise.com/');
    })
    const result = await pool.query('select * from products')
    //we are sending SQL query to the database and getting the result
    const row = result.rows
    console.log(row)
    //.single-products
    for(const product of row){
        await expect(page.locator('.single-products').getByText(product.product_name).first()).toBeVisible()
    }
})



test('validate the carts data from API in automationPractice', async({page, request})=>{
    await page.goto('https://automationexercise.com/');
    const response = await request.get('https://automationexercise.com/api/productsList')
    const body = await response.json()
    console.log(body)
    expect(response.status()).toBe(200)
 for(const product of body.products){
        await expect(page.locator('.single-products').getByText(product.name).first()).toBeVisible()
    }
})

})

// let person = {
//     name: "sara"
// }