import fs from 'fs';
import path from 'path';
import convert from 'heic-convert';

const dir = 'public/assets/aistudio';
const files = fs.readdirSync(dir);

async function run() {
  for (const file of files) {
    if (file.toLowerCase().endsWith('.heic')) {
      const inputPath = path.join(dir, file);
      const outputFilename = file.replace(/\.heic$/i, '.jpg');
      const outputPath = path.join(dir, outputFilename);

      if (fs.existsSync(outputPath)) {
        console.log(`Already exists: ${outputFilename}`);
        continue;
      }

      try {
        const inputBuffer = fs.readFileSync(inputPath);
        const outputBuffer = await convert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.85
        });
        fs.writeFileSync(outputPath, Buffer.from(outputBuffer));
        console.log(`Successfully converted ${file} to ${outputFilename}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

run();
