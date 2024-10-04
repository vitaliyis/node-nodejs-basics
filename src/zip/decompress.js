import path from 'path';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';

const decompress = async () => {
  const filePathSrc = path.join(import.meta.dirname, 'files', 'archive.gz');
  const filePathDest = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');

  const gunzip = createGunzip();
  const source = createReadStream(filePathSrc);
  const destination = createWriteStream(filePathDest);

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await decompress();