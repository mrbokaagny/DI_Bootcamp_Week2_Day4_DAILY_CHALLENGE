let recuperationDeLaSaisir = prompt("Saisissez des mots séparé par des virgule svp :");
let tabToSlice = recuperationDeLaSaisir.split(",");
let maxLenght = -1;
let etoile = '';
let space = ' ';
for(let index of tabToSlice) {
    if(index.length > maxLenght) {
        maxLenght = index.length;
    }
}

maxLenght+=4;

for(let i = 1; i <= maxLenght;i++) {
    etoile+='*';
}
console.log(etoile);
for(let i of tabToSlice) {
    if(i.length < (maxLenght -4)) {
        for(let j=0; j<(maxLenght-4-Number(i.length));j++) {
            space+=' ';
        }
        console.log(`* ${i}${space}*`);
        space = ' ';
    }else {
        console.log(`* ${i} *`);
    }

}
console.log(etoile);