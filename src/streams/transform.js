import { Transform, pipeline } from 'stream';

const transform = async () => {
  const streamTransform = new Transform({
    transform(chunk, encoding, callback) {

      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk);
    }
  });

  pipeline(
    process.stdin,
    streamTransform,
    process.stdout,
    (err) => {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log('Completed successfully.');
      }
    }
  );
};

await transform();