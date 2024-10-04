import fs from 'fs/promises';
import path from 'path';

const textError = 'FS operation failed';
const dirPathSrc = path.join(process.cwd(), 'src', 'fs', 'files');

const list = async () => {
  try {
    await fs.access(dirPathSrc);

    const files = await fs.readdir(dirPathSrc);

    console.log('Array of filenames: ', files)

  } catch (e) {
    console.error(textError);
  }
};

await list();