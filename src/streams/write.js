import path from 'path'
import { createWriteStream } from 'fs'

const write = async () => {
  const filePath = path.join(import.meta.dirname, 'files', 'fileToWrite.txt');

  const writableStream = createWriteStream(filePath, { encoding: 'utf-8' });

  process.stdin.on('data', (chunk) => {
    writableStream.write(chunk);
  });

  process.stdin.on('end', () => {
    writableStream.end();
  });

};

await write();