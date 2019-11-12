import {browser, element, by, By, $, $$, ExpectedConditions, fs} from 'protractor';
import {const, pom_homepage} fromm 'e2e_test_suite';
let pom_homepage = require('../e2e_test_suite/pom_homepage');


describe('protractor tests for fetching product details from a ecommerce site', () = > {

    const ec = protractor.ExpectedConditions;
    const fs = require('fs'); // added file sync to create and write in a json file.
    browser.ignoreSynchronization = true; // for non-angular websites

    beforeAll(async () = > {
    await browser.get(ecom_url);
    //add a wait if it is a non-angular app
    browser.sleep = short_wait;
    pop_up_close_button.click();
    });

    afterAll(async () = > {
     browser.close();
    });


    it('should load search result for items', async() = > {
      search_input_field_homepage.sendKeys('laptop');
      browser.wait(ec.visibilityOf(search_result_1.click()));
     });

    it('should have product details in the search result for the item ', async() = >{
    search_input_field_homepage.sendKeys('laptop');
    browser.wait(ec.visibilityOf(search_result_1.click()));
    await assert.EqualTo(product_price_element, product_price_expected_laptop);
    });


    it('should have delivery section in the search result for the item ', async() = >{
       //provide the search term
        search_input_field_homepage.sendKeys('laptop');
       //add an wait handler to load the search results
        browser.wait(ec.visibilityOf(search_result_1.click()));
        await assert.EqualTo(product_details, product_details_expected_laptop);

      });

    it('should have product price mentioned in the search result for the item ', async() = >{
        search_input_field_homepage.sendKeys('laptop');
        browser.wait(ec.visibilityOf(search_result_1.click()));
        await assert.EqualTo(product_price_element, product_price_expected_laptop)
      });

    it('should write into a JSON file', async() => {
        search_input_field_homepage.sendKeys('laptop');
        browser.wait(ec.visibilityOf(search_result_1.click()));
        await assert.EqualTo(product_price_element, product_price_expected_laptop)
        let data = JSON.stringify();
        
        fs.writeFileSync('price-details.json', data);
    });

});
