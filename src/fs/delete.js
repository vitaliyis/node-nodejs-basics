import fs from 'fs/promises';
import path from 'path';

const textError = 'FS operation failed';
const dirPathSrc = path.join(process.cwd(), 'src', 'fs', 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.access(dirPathSrc);

    await fs.rm(dirPathSrc)

  } catch (e) {
    console.error(textError);
  }
};

await remove();