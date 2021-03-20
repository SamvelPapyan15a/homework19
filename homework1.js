//1. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան 10 բայթով և կաևտածի կոնսոլում այն chunk-երը , որոնք հատուկ սիմվոլներ չունեն:

const fs = require('fs');

const readStream = fs.createReadStream('input.txt');

readStream.on('data',function(chunk){
    console.log(chunk.toString());
})