import fs from 'fs/promises';
import path from 'path';

const textError = 'FS operation failed';
const dirPath = path.join(process.cwd(), 'src', 'fs', 'files');
const dirPathSrc = path.join(dirPath, 'wrongFilename.txt');
const dirPathDest = path.join(dirPath, 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(dirPathSrc, fs.constants.F_OK);

    try {
      await fs.access(dirPathDest, fs.constants.F_OK);
      console.error(textError);
      return;

    } catch (err) {}

    await fs.rename(dirPathSrc, dirPathDest)

  } catch (err) {
    console.error(textError);
  }
};

await rename();