import {test} from "@playwright/test";
import { afterEach } from "node:test";

test.test.describe('', () => {
    test.beforeAll(async ({page}) => {
        console.log("Before all tests");
        //await page.goto('https://example.com');
    });
    test.afterAll(async ({page}) => {
        console.log("After all tests");
        //await page.goto('https://example.com');
    }
    );


    test.beforeEach(async ({page}) => {
        console.log("Before each test");
        //await page.goto('https://example.com');
    }
    );
    afterEach(async ({page}) => {
        console.log("After each test");
        //await page.goto('https://example.com');
    }
    );

    test ('test1', async ({page}) => {
        console.log("test 1 is executing");
        //await page.goto('https://example.com');
      
    });
    test ('test2', async ({page}) => {
        console.log("test 2 is executing");
       // await page.goto('https://example.com');
        
    });
    test ('test3', async ({page}) => {
        console.log("test 3 is executing");
        // await page.goto('https://example.com');
        
    });



});
