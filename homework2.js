//2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ: Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը: Ստեղծել readStream և highWaterMark:1  նշելով բոլոր սիմվոլների վրայով անցնել:
// Ծրագիրը աշխատացնել homework4Eng.txt համար:

const fs = require('fs');
const config = {
    a: "ա",
    b: "բ",
    g: "գ",
    d: "դ",
    e: "ե",
    z: "զ",
    t: "տ",
    c: "ց",
    h: "հ",
    o: "օ",
    u:"ու",
    j:"ջ",
    y:"յ",
    m:"մ",
    n:"ն",
    s:"ս",
    r:"ռ",
    i:"ի",
    p:"պ",
    f:"ֆ",
    q:"ք",
    k:"կ",
    x:"Խ",
    v:"վ"
};
const readStream = fs.createReadStream('homework4Eng.txt',{
    encoding:"utf-8",
    highWaterMark : 1
});
const writeStream = fs.createWriteStream('homework4Arm.txt');

readStream.on('data',chunk=>{
    let armLetter = (chunk.toUpperCase() == chunk) ? config[chunk.toLowerCase()]?.toUpperCase() : config[chunk] || chunk;
    writeStream.write(armLetter);
});