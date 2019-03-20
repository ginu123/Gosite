var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.1.0",
        "Test Environment": process.env.ENV || "Local",
        "Browser": "Chrome ",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};
 
reporter.generate(options);

