Hello,
Reqyuirements:NodeJS,Cypress Need to be installed
Installed cypress-xpath Plugin for one element.
Automation for the given STG Scenarios are done and most of the usecases works especially Tracking ORder.
Please find below the details:

	Track Order Use Case – 
   The provided script is able to track an order by providing a valid Order ID/AWB ID. It will return all relevant information about that particular Order.
   The  provided script is able to track an order with a valid Order ID/AWB ID. It will fetch and validate the error messages.
   The provided script is able to validate the UI value againest the api response got from the providing orderID.

The Framework structure contains.
1) E2E: The  End to end test cases which includes UI testing, API testing
2) Fixtures: This includes the data required for  running tests like track order and awb data.
3) Pages: This  is where all page objects are defined. It includes methods related to each element on a web page.
4) Support: In this  folder you will get all the support files like Utilities. In utilities  file created a api call to get the orderId to evaluate againest captures text from the UI
5) Environment File: This includes  all the environment variables that needs to be set before running any tests.

    
   
Note: When I started working on API Test scenarios and UI Error messages for AWB is  not able to capture because the site is not running after 8PM.

// Still things to do
1) Implement GithubACtion for CI/CD Pipeline and integrated with Cypress cloud

