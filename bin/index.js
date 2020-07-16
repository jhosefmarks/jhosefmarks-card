#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require('boxen');
const chalk = require('chalk');

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
};

// Text + chalk definitions
const data = {
  name: chalk.white('Jhosef Marks '),
  handle: chalk.gray('(Dev for Fun)'),
  work: chalk.white('Research and Development Coordinator at Totvs'),
  openSource: chalk.bold.green('https://po-ui.io'),
  medium: chalk.cyan('https://medium.com/@jhosefmarks'),
  twitter: chalk.cyan('https://twitter.com/jhosefmarks'),
  github: chalk.cyan('https://github.com/jhosefmarks'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/jhosefmarks'),
  web: chalk.cyan('Comming soon'),
  npx: chalk.white('npx @jhosefmarks/card'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelMedium: chalk.white.bold('     Medium:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const openSource = `${data.labelOpenSource}  ${data.openSource}`;
const medium = `${data.labelMedium}  ${data.medium}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading
  + newline
  + newline
  + working
  + newline
  + openSource
  + newline
  + githubing
  + newline
  + medium
  + newline
  + linkedining
  + newline
  + twittering
  + newline
  + webing
  + newline
  + newline
  + carding;

const cardMessage = chalk.green(boxen(output, options));
captains.log(cardMessage);
