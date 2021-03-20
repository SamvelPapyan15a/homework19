//4.Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում է տեքստ ֆայլի հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․

const fs = require('fs');

function capitalizeSentence(source){
    return new Promise(function(resolve, reject){
        const readStream = fs.createReadStream(source);

    });
}