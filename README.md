# cypress-test-links
Tests for broken links via cypress example

To run tests run the Cypress (npm run cypress:open)

Known issues:
1. Two links (download link which start download and mailing link) are not checked.
2. It is one test with consequently running through links instead of generating separate tests for each links or async run.
3. Sometimes external sites like www.crunchbase.com give forbidden status with suspicion for automatic instruments usage
