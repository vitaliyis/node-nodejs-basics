import fs from 'fs/promises';
import path from 'path';

const create = async () => {
  const text = 'I am fresh and young';
  const textError = 'FS operation failed';

  const dirPath = path.join(process.cwd(), 'src', 'fs', 'files');
  const filePath = path.join(dirPath, 'fresh.txt');

  try {
    const stats = await fs.stat(filePath);
    if (stats) {
      console.error(textError)
    }

  } catch (e) {
    await fs.writeFile(filePath, text);
  }
};

await create();