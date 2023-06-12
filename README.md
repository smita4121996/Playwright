# Playwright

To run all the test
- npx playwright test

To show the result
-   npx playwright show-report

Run single test
- npx playwright test .\tests/example.spec.js

Run with name 
- npx playwright test example 

Run with head mode (You can see running script)
- npx playwright test example --headed 

Run on chrome (You can see running script)
- npx playwright test --project=chromium example --headed

To debug 
- npx playwright test --project=chromium example --headed --debug

Record a script
npx playwright test record_demo --headed

View the trace file 
-npx playwright show-trace test1.zip 
