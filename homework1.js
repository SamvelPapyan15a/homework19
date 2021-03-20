//1. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան 10 բայթով և կաևտածի կոնսոլում այն chunk-երը , որոնք հատուկ սիմվոլներ չունեն:

const fs = require('fs');

const readStream = fs.createReadStream('input.txt',{
    encoding:'utf-8',
    highWaterMark:10
});

readStream.on('data',function(chunk){
    console.log(chunk.replace(/[^a-zA-Z0-9\n\s\t]/g, ''));
})