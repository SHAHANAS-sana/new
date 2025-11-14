import { spawn } from 'child_process';
import path from 'path';

// Function to run a command
function runCommand(command, args, options = {}) {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: true,
    ...options,
  });

  return new Promise((resolve, reject) => {
    child.on('exit', code => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
}

async function start() {
  try {
    // Build the frontend
    console.log('Building frontend...');
    await runCommand('npm', ['run', 'build']);

    // Start the server
    console.log('Starting server...');
    await runCommand('node', ['server.js']);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

start();
