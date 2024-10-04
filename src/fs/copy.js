import fs from 'fs/promises';
import path from 'path';

const textError = 'FS operation failed';
const dirPathSrc = path.join(process.cwd(), 'src', 'fs', 'files');
const dirPathDest = path.join(process.cwd(), 'src', 'fs', 'files_copy');

const copyFiles = async (src, dest) => {
  try {
    const files = await fs.readdir(src);

    await fs.mkdir(dest);

    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);

      await fs.copyFile(srcPath, destPath);
    }
  } catch (err) {
    throw new Error();
  }
};

const copy = async () => {
  try {
    await fs.access(dirPathSrc, fs.constants.F_OK);

    try {
      await fs.access(dirPathDest, fs.constants.F_OK);
      console.error(textError);
      return;

    } catch (err) {}

    await copyFiles(dirPathSrc, dirPathDest);

  } catch (err) {
    console.error(textError);
  }

};

await copy();
