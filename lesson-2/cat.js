#!/usr/bin/env node
const fs = require('fs');

const pathToFileToRead = process.argv[2];

const readStream = fs.createReadStream(pathToFileToRead, {enconding:'utf8'});
let fileContent = '';

readStream.on('data', function(chunk) {
  fileContent+=chunk;
});

readStream.on('end', function() {
  process.stdout.write(fileContent);
});
