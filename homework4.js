//4.Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում է տեքստ ֆայլի հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․

const fsPromises = require('fs/promises');

async function capitalizeSentence(path){
    let data = await fsPromises.readFile(path,{
        encoding:'utf-8'
    });
    await fsPromises.writeFile(path, data.split(' ').map(word=>word[0].toUpperCase() + word.slice(1)).join(" "));
}

capitalizeSentence('./input2.txt').then(()=>{
    console.log("done");
}).catch(err=>{
   console.log(err.message);
});