### Set Up
1. Go to project source
2. Install npm package json with: npm init -y
3. Install cypress: npm install cypress
4. Run tests through CMD: npx cypress run --spec "cypress/integration/test-cases/**/*"

### Answers to Questions
1.	More scenarios would include testing the login feature, which could be tested for both negative & positive scenarios. More on from that more coverage could be included within the 'cart' page, there are features for removing items, emptying full cart & checking out – all of which should be tested against for full coverage.
2.	More uniformity with naming data attributes. Adding data attributes to html elements which could be leveraged for testing would lower the time spent for the tester to figure out what element he/she is to use. This would also lower the risk of issues within the test code.
3.	BDD development should really be used for verifying the most critical parts of the application using E2E tests. BDD could also be used to verify wanted functionality using integration tests. Where BDD should not be used is when we want to automate some edge case scenarios or tests that the business might not understand or think of.
