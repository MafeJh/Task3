const environment = process.env.SUITE || "regression";
const CONFIG_ENV = {
  smoke: ["./../tests/googleCloudSmoke.tests.js"],
  regression: ["./../tests/*.tests.js"],
};

exports.config = {
  runner: "local",
  specs: CONFIG_ENV[environment.trim()],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: "chrome",
    },
  ],

  logLevel: "error",

  bail: 0,

  baseUrl: "https://cloud.google.com/?hl=es-419",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    "spec",
    [
      "junit",
      {
        outputDir: "./reports/junit-results",
        outputFileFormat: function (options) {
          return `results-${options.cid}.xml`;
        },
      },
    ],
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  // Adding the screenshot capture hook
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      await browser.takeScreenshot();
    }
  },

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  /**
   * Gets executed once before all workers get launched.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  /**
   * Gets executed before a worker process is spawned and can be used to initialize specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {object} specs    specs to be run in the worker process
   * @param  {object} args     object that will be merged with the main configuration once worker is initialized
   * @param  {object} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just after a worker process has exited.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {number} exitCode 0 - success, 1 - fail
   * @param  {object} specs    specs to be run in the worker process
   * @param  {number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {string} cid worker id (e.g. 0-0)
   */
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {object}         browser      instance of created browser/device session
   */
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  /**
   * Hook that gets executed before the suite starts
   * @param {object} suite suite details
  /**
   * Function to be executed after a test (in Mocha/Jasmine only)
   * @param {object}  test             test object
   * @param {object}  context          scope object the test was executed with
   * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
   * @param {*}       result.result    return object of test function
   * @param {number}  result.duration  duration of test
   * @param {boolean} result.passed    true if test has passed, otherwise false
   * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
   */
  /**
   * @param {object} suite suite details
   */
  /**
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {number} result 0 - command success, 1 - command error
   * @param {object} error error object if any
   */
  /**
   * @param {number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  /**
   * @param {object} exitCode 0 - success, 1 - fail
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // },
  /**
   * @param {string} oldSessionId session ID of the old session
   * @param {string} newSessionId session ID of the new session
   */
  // }
  /**
   * @param {object} params information about the assertion to be executed
   */
  // }
  /**
   * @param {object} params information about the assertion that was executed, including its results
   */
};
