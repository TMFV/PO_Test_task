const fs = require('fs');
const readline = require('readline');

global.currentFile = '10m.txt';
global.arrayNums = [];

function findMaxNum(arrayNumbers) {
  let maxNum = arrayNumbers[0];
  for (i = 0; i < arrayNumbers.length; ++i) {
    if (maxNum < arrayNumbers[i]) maxNum = arrayNumbers[i];
  }
  console.log(`MAX_NUMBER = ${maxNum}`);
}

function findMinNum(arrayNumbers) {
  let minNum = arrayNumbers[0];
  for (i = 0; i < arrayNumbers.length; ++i) {
    if (minNum > arrayNumbers[i]) minNum = arrayNumbers[i];
  }
  console.log(`MIN_NUMBER = ${minNum}`);
}

function findMedianNum(arrayNumbers) {
  let sortedArray = arrayNumbers.sort((a, b) => a - b);
  let lengthArray = sortedArray.length;
  let medianNum =
    lengthArray % 2
      ? sortedArray[Math.round(lengthArray / 2)]
      : (sortedArray[lengthArray / 2] + sortedArray[lengthArray / 2 + 1]) / 2;
  console.log(`MEDIAN_NUMBER ${medianNum}`);
}

function findAverageNum(arrayNumbers) {
  let average;
  let sum = 0;
  for (i = 0; i < arrayNumbers.length; ++i) {
    sum += arrayNumbers[i];
  }
  average = sum / arrayNumbers.length;
  console.log(`AVERAGE_NUMBER ${average}`);
}

async function processLineByLine() {
  const fileStream = fs.createReadStream(currentFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    arrayNums.push(line * 1);
  }
  findMaxNum(arrayNums);
  findMinNum(arrayNums);
  findMedianNum(arrayNums);
  findAverageNum(arrayNums);
}

processLineByLine();
