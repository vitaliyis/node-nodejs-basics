import { spawn } from 'child_process';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = spawn('node', [filePath, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  child.stderr.on('data', (error) => {
    process.stderr.write(`Error from child process: ${error}`);
  });

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });

};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", 'someArgument2']);
