const fs = require('fs');

const data = 'yeahhh it works!';

const writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'utf8');
writeStream.end();

writeStream.on('finish', function () {
  console.log('finished');
}); 
