import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const createWorker = async (number, filePath) => {
  return new Promise((resolve) => {
    const worker = new Worker(filePath)

    worker.postMessage(number);
    worker.once('message', (msg) => {
      resolve({ status: 'resolved', data: msg })
    })
    worker.once('error', () => {
      resolve({ status: 'error', data: null})
    })
    worker.once('exit', (code) => {
      if (code !== 0) {
        resolve({ status: 'error', data: null });
      }
    });
  })
}

const performCalculations = async () => {
  const numberCores = os.cpus().length;
  const filePath = path.join(import.meta.dirname, 'worker.js');

  const workers = [];

  for (let i = 0; i < numberCores; i++) {
    workers.push(createWorker(10 + i, filePath));
  }

  const results = await Promise.all(workers)
  console.log('results => ', results)

};

await performCalculations();