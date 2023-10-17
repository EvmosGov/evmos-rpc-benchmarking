import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import path from 'path';

// Utils
export function mergeLogFiles(dirPath, outputFileName) {
  let files = readdirSync(dirPath);
  let mergedContent = '';

  // Filter and sort files
  files = files
    .filter(file => file.startsWith('eth_'))
    .sort((a, b) => {
      const numberA = parseInt(a.split('.')[1]);
      const numberB = parseInt(b.split('.')[1]);
      return numberA - numberB;
    });

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const content = readFileSync(filePath, 'utf8');
    mergedContent += content + '\n';
    unlinkSync(filePath); // delete the file
  });

  writeFileSync(path.join(dirPath, outputFileName), mergedContent);
}
export function mergeMetaFiles(dirPath, outputFileName) {
  let files = readdirSync(dirPath);
  let mergedContent = '';

  // Filter and sort files
  files = files
    .filter(file => file.startsWith('metadata'))
    .sort((a, b) => {
      const numberA = parseInt(a.split('.')[1]);
      const numberB = parseInt(b.split('.')[1]);
      return numberA - numberB;
    });

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const content = readFileSync(filePath, 'utf8');
    mergedContent += content + '\n';
    unlinkSync(filePath); // delete the file
  });

  writeFileSync(path.join(dirPath, outputFileName), mergedContent);
}
export function countdown(s) {
  const d = Math.floor(s / (3600 * 24));
  s -= d * 3600 * 24;
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  s -= m * 60;
  const tmp = [];
  d && tmp.push(d + 'd');
  (d || h) && tmp.push(h + 'h');
  (d || h || m) && tmp.push(m + 'm');
  tmp.push(parseInt(s) + 's');
  return tmp.join(' ');
}
