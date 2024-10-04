import fs from 'fs/promises';
import path from 'path';

const read = async () => {
  const filePath = path.join(process.cwd(), 'src', 'fs', 'files', 'fileToRead.txt');
  const textError = 'FS operation failed';

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(textError);
  }
};

await read();