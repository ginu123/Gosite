const nightwatchCucumber = require('nightwatch-cucumber');
const chromedriverPath = require('chromedriver').path;
const selenuimPath = require('selenium-server').path

nightwatchCucumber({
  cucumberArgs: [
    '--require', 'step-definition',
    '--format', 'json:reports/cucumber.json',
    'features',
  ],
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: "page-objects",

  selenium: {
    start_process: true,
    server_path: selenuimPath,
    host: '127.0.0.1',
    port: 4444,

    cli_args: {
      'webdriver.chrome.driver': chromedriverPath,
    },
    args: [
      "start-fullscreen"
    ],
  },

  test_settings: {
    default: {
      launch_url: 'https://platform.gosite.build',
      selenium_port: 4444,
      selenium_host: "127.0.0.1",
      screenshots: {
        "enabled": true,
        "path": "test/reports/screenshots",
        "on_failure": true,
        "on_error": true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        "chromeOptions": {
          "args": [
            "window-size=1280,800"
          ]
        },
        javascriptEnabled: true,
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
  },
};