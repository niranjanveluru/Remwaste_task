# Remwaste_task

This repository contains API and UI tests developed using React app + node js backend ( http://localhost:3000/ ) for Remwaste QA assignment.

---

## Install Playwright

npm init playwright@latest
npm install luxon 
npm install -g newman 




### Test Files

- `login.spec.ts` – Test cases for login functionality 
- `dashboard.spec.ts` – Test cases for add / modify / delete items

---

####  Run Tests

To Run Playwright Tests :

npx playwright test login.spec.ts --headed ( headed )
npx playwright test dashboard.spec.ts  ( headless )

To Run Newman API Tests in powershell :

& "C:\Users\<username>\AppData\Roaming\npm\newman.cmd" run QA_Tests.postman_collection.json -e CRUD_APP.postman_environment.json --delay-request 100 --reporters cli,json  --reporter-json-export newman-report.json

To Run Newman API Tests in bash :

newman run QA_Tests.postman_collection.json -e CRUD_APP.postman_environment.json --delay-request 100 --reporters cli,json --reporter-json-export newman-report.json

#####  Test Reporting

npx playwright show-report - To see default playwright report
newman-run-report-<timestamp>.json - will be generated ./API-tests/newman
