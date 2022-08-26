const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", 
  reportPath: "./reports/Telnyx-testing-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});
