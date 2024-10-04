import path from 'path';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';

const compress = async () => {
  const filePathSrc = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
  const filePathDest = path.join(import.meta.dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const source = createReadStream(filePathSrc);
  const destination = createWriteStream(filePathDest);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await compress();