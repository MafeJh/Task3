# Folder Structure

```
└── 📁src
    └── 📁config
        └── wdio.conf.js
    └── 📁po
        └── 📁components
            └── 📁common
                └── base.component.js
                └── header.component.js
            └── 📁computeEngineForm
                └── computeEngineForm.component.js
                └── costDetail.component.js
            └── 📁costSummaryDialog
                └── costSummaryDialog.component.js
            └── 📁pricingCalculator
                └── productsDialog.component.js
        └── index.js
        └── 📁pages
            └── base.page.js
            └── computeEngineForm.page.js
            └── costEstimateSummary.page.js
            └── homeGoogleCloud.page.js
            └── index.js
            └── pricingCalculator.page.js
            └── searchResults.page.js
    └── 📁tests
        └── googleCloud.tests.js
    └── 📁utils
        └── google-cloud-computing.dataset.json
```

# Usage

For use this project clone from the repository https://github.com/MafeJh/Task3.git and install WDIO with `npm init wdio .` command. After that, please go to your wdio.conf.js and be sure you are exporting wih exports.config instead of ECMAS type module. Also go to your package.json and delete `"type": "modules"`, later ypu can add to scripts the route for the test: `"wdio": "wdio run ./src/config/wdio.conf.js"`.

# Run the test

- `npm run wdio`

# Test Flow

The flow consist in go to the page Google Cloud Platform and look for the Pricing Calculator feature and select GC Compute engine, then add the products and finally validate the summary cost price.

## 1. Open the Google Cloud Platform

Navigate to Google Cloud.
Search for the Pricing Calculator:
Click on the search icon at the top of the portal page.
Enter "Google Cloud Platform Pricing Calculator" into the search field.
Perform the search.

## 2. Access the Calculator

Click on "Google Cloud Platform Pricing Calculator" from the search results.
You will be redirected to the calculator page.

## 3. Select Compute Engine product from the pricing calculator page

Click on "add to estimate" then a dialog is open with some products
Click on the "Compute Engine" card.

## 4. Fill the Compute Engine Form

Fill out the form with the following data:
Number of instances: 4
Operating System / Software: Free: paid-sles OS
Provisioning model: Regular
Machine Family: General purpose
Series: N1
Machine type: n1-standard-2 (vCPUs: 2, RAM: 7.5 GB)
Add GPUs:
GPU type: NVIDIA Tesla P4
Number of GPUs: 2
Local SSD: 2x375 Gb
Datacenter location: Northern Virginia (us-east4)
Committed usage: 1 Year
Leave other options in their default state.

## 5. Estimate the Cost

Still in the same page of Compute Engine, in the right there is cost details section
Verify the price calculated in the right section of the calculator in the line “Total Estimated Cost: USD ${amount} per 1 month”.

## 6. Share and Verify the Estimate

Click on "Share" to see the Total estimated cost, then a dialog is open
Click "Open estimate summary" to see the Cost Estimate Summary in a separate browser tab.

## 7. Cost Estimate Summary

Verify that the 'Cost Estimate Summary' matches the values filled in Step 4.
Verify the total estimated cost.

# Report

For report install the dependencies:

- npm install @wdio/junit-reporter --save-dev
- npm install @wdio/allure-reporter --save-dev
- npm install @wdio/sync --save-dev

Run `npx wdio ./src/config/wdio.conf.js`

Generate and view allure report

- allure generate allure-results --clean
- allure open

# Further work to do

For the purpose of the task, many things did not get properly attached, for instance there is room for improvement in the ComputeEngineForm to try to make it more maintainable by using an extended method for the clicks and selects on dropdowns as well as reducing the amount of code and divide it by chunks.
