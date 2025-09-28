const readline = require('readline-sync');
const fs = require('fs');

const PATH_FILE = 'dataitem.json';

let jawab = 0;
let globaljawab = 0;
let isidata = 0;
let temparray1 = [];
let groups = [];

const bacadata = fs.readFileSync(PATH_FILE, 'utf-8', (err) => {
    if (err){
        console.error('Error Reading File!!!!', err);
        return;
    }
});

function FisherYates (arrai) {
    for (let i = isidata - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arrai[i];
        arrai[i] = arrai[j];
        arrai[j] = temp;
    }
}

function isNumericString(str) {
  return /^[+-]?\d+(\.\d+)?$/.test(str);
}

function toShuffleBasedOnGroup(grupisi) {
    let isiPerGroup = Math.floor(temparray1.length/grupisi);
    let sisa = temparray1.length % grupisi;
    let startIndex = 0;
    for(let k = 0; k < grupisi; k++){
        let currGroupSize = isiPerGroup;

        if(k < sisa) {
            currGroupSize += 1;
        }

        const potonggrup = temparray1.slice(startIndex, startIndex + currGroupSize);
        startIndex += currGroupSize; 
        groups.push(potonggrup);
    }

    return groups;
}

const parsedata = JSON.parse(bacadata);
isidata = parsedata.length;

function mustInt() {
    const groupcat = readline.question('Masukkan jumlah kelompok yang anda inginkan: ');
    if (!isNumericString(groupcat)){
        console.log("Input harus Angka!!!");
        mustInt();
    } else {
        const jumlahkelompok = parseInt(groupcat);
        globaljawab = jumlahkelompok;
        console.log("Jumlah kelompok yang anda pilih: " + jumlahkelompok);
    }
}

mustInt();

while (jawab != 1){
    jawab = readline.question('Masukkan nama nama yang ingin anda masukkan (kalau mau berhenti, input 1): ');
    let containsNumber = /\d/.test(jawab);
    
    if(jawab == '1'){
        break;
    }

    if(containsNumber) {
        console.log("Input tidak boleh mengandung angka!");
        continue;
    } else {
        if(Array.isArray(parsedata) && parsedata.length > 0){
            temparray1.push(parsedata);
        }
        temparray1.push(jawab);
        console.log("isi temp array:\n" + temparray1); 
        // parsedata.push(temparray);
        isidata += 1;
    }
}
console.log(isidata);
FisherYates(temparray1);
const finalGroups = toShuffleBasedOnGroup(globaljawab);
let finalJsonObject = {};

for (let k = 0; k < finalGroups.length; k++) {
    const groupName = `Grup ${k + 1}`; 
    const groupData = finalGroups[k];   

    finalJsonObject[groupName] = groupData;
}

const parsingdata = JSON.stringify(finalJsonObject, null, 2);
const writefile = fs.writeFileSync('dataitem.json', parsingdata, 'utf-8');

const bacadatalagi = fs.readFileSync(PATH_FILE, 'utf-8', (err) => {
    if (err){
        console.error('Error Reading File!!!!', err);
        return;
    }
});

console.log("Isi JSON : \n" + bacadatalagi);
// console.log("isi temp2: " + temparray2);
