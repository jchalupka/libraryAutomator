#!/usr/bin/env node
const { spawn } = require('child_process');
require('dotenv').config()

const child = spawn(
  'node', ['local.js'],
  {
    env: {
      ...process.env,
    },
  },
);

child.stdout.on('data', (data) => {
  console.log(`${child.pid}: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`ERROR: ${data}`);
});

child.on('exit', (code, signal) => {
  console.log(`child process '${child.pid}' exited with code ${code} and signal ${signal}`);
});
