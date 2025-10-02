const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

try {
  // Get inputs
  const whoToGreet = core.getInput('who-to-greet');
  const logFile = core.getInput('log-file');

  // Generate greeting
  const greeting = `Hello ${whoToGreet}!`;
  const time = new Date().toISOString();

  // Log to console
  core.info(greeting);
  core.info(`Greeting time: ${time}`);

  // Write to file
  const logPath = path.join(process.env.GITHUB_WORKSPACE, logFile);
  fs.appendFileSync(logPath, `${greeting} at ${time}\n`);

  // Set output
  core.setOutput('greeting-time', time);

  // Set a notice annotation
  core.notice(`Greeting logged to ${logFile}`);

} catch (error) {
  core.setFailed(error.message);
}