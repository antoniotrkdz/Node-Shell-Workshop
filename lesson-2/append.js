const fs = require('fs');

const fileToRead = process.argv[2];
const command = process.argv[3];
const fileToWrite = process.argv[4];

const readStream = fs.createReadStream(fileToRead);
const writeStream = fs.createWriteStream(fileToWrite, {flags:a});
readStream.pipe(writeStream);
