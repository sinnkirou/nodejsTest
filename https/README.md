"# OnlineBindServices" 
split off the node server API helper layer into a different repo from the webpage delivery code. 

## Directory Layout
```
.
├─.env
├─.eslintrc.js
├─.gitignore
├─package-lock.json
├─package.json
├─README.md
├─webpack.common.js
├─webpack.dev.js
├─webpack.prod.js
├─test
|  ├─mocked
|  |   ├─apiInfo.js
|  |   ├─ContactRatingQuestions.js
|  |   └SampleQuote.js
|  ├─log
|  |  ├─Logger.spec.js
|  |  └LogManager.spec.js
|  ├─api
|  |  ├─AddInfoOneRatingQuestionService.spec.js
|  |  ├─AddInfoTwoRatingQuestionGetService.spec.js
|  |  ├─AddInfoTwoRatingQuestionPostService.spec.js
|  |  ├─AppSettingService.spec.js
|  |  ├─AssignmentRatingQuestionService.spec.js
|  |  ├─BATCallService.spec.js
|  |  ├─BindConfirmationGetFormPdfService.spec.js
|  |  ├─BindConfirmationGetMembershipCardService.spec.js
|  |  ├─BindConfirmationGetPOICardsService.spec.js
|  |  ├─ClicktoCallOpenService.spec.js
|  |  ├─ContactRatingQuestionService.spec.js
|  |  ├─CountyValidationService.spec.js
|  |  ├─CustomCoverageRatingQuestionGetService.spec.js
|  |  ├─CustomCoverageRatingQuestionPostService.spec.js
|  |  ├─CustomPremiumService.spec.js
|  |  ├─DriverRatingQuestionService.spec.js
|  |  ├─ESignatureQuoteSaveService.spec.js
|  |  ├─ESignatureValidationService.spec.js
|  |  ├─HistoryRatingQuestionService.spec.js
|  |  ├─HttpRequest.spec.js
|  |  ├─LeadshipService.spec.js
|  |  ├─LoggingService.spec.js
|  |  ├─ManifestService.spec.js
|  |  ├─MembershipValidationService.spec.js
|  |  ├─PaymentRatingQuestionService.spec.js
|  |  ├─ProspectService.spec.js
|  |  ├─QuickCoverageRatingQuestionService.spec.js
|  |  ├─QuickPremiumService.spec.js
|  |  ├─QuoteCreationService.spec.js
|  |  ├─QuoteExistHttpRequest.spec.js
|  |  ├─QuoteReloadService.spec.js
|  |  ├─QuoteRetrievalService.spec.js
|  |  ├─ServiceGetRequest.spec.js
|  |  ├─ServicePostRequest.spec.js
|  |  ├─ServicePutRequest.spec.js
|  |  ├─ServiceWrapper.spec.js
|  |  ├─SessionDeleteService.spec.js
|  |  ├─SessionGetService.spec.js
|  |  ├─SessionPutService.spec.js
|  |  ├─SummaryRatingQuestionService.spec.js
|  |  ├─VehicleLookupService.spec.js
|  |  ├─VehiclePartService.spec.js
|  |  ├─VehicleRatingQuestionService.spec.js
|  |  ├─VehicleSearchService.spec.js
|  |  ├─VehicleTrimService.spec.js
|  |  └VHTCallService.spec.js
├─src
|  ├─index.js
|  ├─tls
|  |  ├─npm-debug.log
|  |  ├─server-cert.pem
|  |  └server-key.pem
|  ├─log
|  |  ├─Logger.js
|  |  └LogManager.js
|  ├─constants
|  |     └app-constants.js
|  ├─api
|  |  ├─AddInfoOneRatingQuestionService.js
|  |  ├─AddInfoTwoRatingQuestionGetService.js
|  |  ├─AddInfoTwoRatingQuestionPostService.js
|  |  ├─AppSettingService.js
|  |  ├─AssignmentRatingQuestionService.js
|  |  ├─BATCallService.js
|  |  ├─BindConfirmationGetFormPdfService.js
|  |  ├─BindConfirmationGetMembershipCardService.js
|  |  ├─BindConfirmationGetPOICardsService.js
|  |  ├─ClicktoCallOpenService.js
|  |  ├─ContactRatingQuestionService.js
|  |  ├─CountyValidationService.js
|  |  ├─CustomCoverageRatingQuestionGetService.js
|  |  ├─CustomCoverageRatingQuestionPostService.js
|  |  ├─CustomPremiumService.js
|  |  ├─DriverRatingQuestionService.js
|  |  ├─ESignatureQuoteSaveService.js
|  |  ├─ESignatureValidationService.js
|  |  ├─HistoryRatingQuestionService.js
|  |  ├─HttpRequest.js
|  |  ├─LeadshipService.js
|  |  ├─LoggingService.js
|  |  ├─ManifestService.js
|  |  ├─MembershipValidationService.js
|  |  ├─PaymentRatingQuestionService.js
|  |  ├─ProspectService.js
|  |  ├─QuickCoverageRatingQuestionService.js
|  |  ├─QuickPremiumService.js
|  |  ├─QuoteCreationService.js
|  |  ├─QuoteExistHttpRequest.js
|  |  ├─QuoteReloadService.js
|  |  ├─QuoteRetrievalService.js
|  |  ├─QuoteSaveService.js
|  |  ├─ServiceDeleteRequest.js
|  |  ├─ServiceGetRequest.js
|  |  ├─ServicePostRequest.js
|  |  ├─ServicePutRequest.js
|  |  ├─ServiceWrapper.js
|  |  ├─SessionDeleteService.js
|  |  ├─SessionGetService.js
|  |  ├─SessionPutService.js
|  |  ├─SummaryRatingQuestionService.js
|  |  ├─VehicleLookupService.js
|  |  ├─VehiclePartService.js
|  |  ├─VehicleRatingQuestionService.js
|  |  ├─VehicleSearchService.js
|  |  ├─VehicleTrimService.js
|  |  └VHTCallService.js
├─dist
|  ├─main.js
|  └main.js.map
```

## Quick Start
#### 1. Get the latest version
You can start by cloning the latest version on your local machine by running:

```shell
$ git clone https://github.com/clublabs/OnlineBindServices.git
$ cd OnlineBindServices
```

#### 2. Run `npm install`
This will install both run-time project dependencies and developer tools listed in package.json file.

#### 3. (Optional) Configure the environment port
Find the .env file in the root directory. Add environment-specific variables on new lines in the form of NAME=VALUE. For more details, check [dotenv](https://www.npmjs.com/package/dotenv). For example:
`PORT=3050`

**Note** that do not commit sensitive infomation into this file.

#### 4. Run `npm start`
This command will build the app from the source files (`/src`) into the output `/dist` folder. As soon as the initial build completes, it will start the Node.js server (`node dist/main.js`).

**Note** that the npm start command launches the app in development mode, the compiled output files are not optimized and minimized in this case.


## How to Build, Test

#### 1. If you need just to build the app, simply run:
```shell
$ npm run build
```

After running this command, the /dist folder will contain the compiled version of the app. For example, you can launch Node.js server normally by running `node dist/main.js`.

#### 2. To check the source code for syntax errors and potential issues run:
```shell
$ npm run eslint
$ npm run eslint:fix      # check the systax errors and fix all auto-fixable issues
```

#### 3. To launch unit tests:
```shell
$ npm test          # Run unit tests with test coverage
$ npm run testwithoutreport    # Run unit tests without without coverage
```

By default, [Mocha](https://mochajs.org/) test runner is looking for test files matching the `test/**/*.spec.js` pattern. Take a look at `test/api/AddInfoOneRatingQuestionService.spec.js` as an example.

## Confugire the original OLB project to connect the OnlineBindServices
 
Find the apiHelperInfo.js file in OLB directory `src/shared` which stores the apiHelper info. For example:
```
const envApiInfo = {
    host: "localhost",
    port: "3050",
    baseEnvPath: "",
    vehicleLookUpPath: "/vehicle",
    vehiclesLookUpPath: "/vehicles",
    membershipCardPath: "/membership/card"
};
```

Find the config.js file in OLB directory `src` which stores the real service apiInfo. For example:
```
const envApiInfo = {
    host: "localhost",
    port: "3030",
    baseEnvPath: "/api/Quote",
    path: "/api/Quote",
    partialPath: "/api/Quote",
    clientId: "****************",
    clientSecret: "****************",
    ratingPath: "/api/Quote",
    vehicleLookUpPath: "/api/Quote/vehicle",
    vehiclesLookUpPath: "/api/Quote/vehicles",
    membershipCardPath: "/membership/card",
    googleMapKey: "******************"
};
```

## Using postman to test

For example: https://localhost:3050/api/Quote/contact/TX/11112018
pass the apiInfo of real service as the request body:
```
{
    "quoteInfo": {
        "state": "TX",
        "policyDate": "04082018"
    },
    "apiInfo": {
        "host": "localhost",
        "port": "3030",
        "baseEnvPath": "/api/Quote",
        "path": "/api/Quote",
        "partialPath": "/api/Quote",
        "clientId": "**********************************",
        "clientSecret": "**********************************",
        "ratingPath": "/api/Quote",
        "vehicleLookUpPath": "/api/Quote/vehicle",
        "vehiclesLookUpPath": "/api/Quote/vehicles",
        "membershipCardPath": "/membership/card",
        "googleMapKey": "**********************************"
    }
}
```
