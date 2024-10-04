import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const calculateHash = async () => {
  const filePath = path.join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
  const fileStream = createReadStream(filePath);

  const hash = createHash('sha256');

  fileStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  fileStream.on('end', () => {
    const resultHash = hash.digest('hex');
    console.log(`Hash: ${resultHash}`);
  });

};

await calculateHash();