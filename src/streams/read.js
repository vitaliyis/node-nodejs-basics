import path from 'path'
import { createReadStream } from 'fs'

const read = async () => {
  const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
  const fileStream = createReadStream(filePath, { encoding: 'utf-8' });

  fileStream.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
  });
};

await read();