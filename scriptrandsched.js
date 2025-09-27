const readline = require('readline-sync');
const fs = require('fs');
const { json } = require('stream/consumers');

const PATH_FILE = 'dataitem.json';

let jawab = 0;
let globaljawab = 0;

const bacadata = fs.readFileSync(PATH_FILE, 'utf-8', (err) => {
    if (err){
        console.error('Error Reading File!!!!', err);
        return;
    }
});

function isNumericString(str) {
  return /^[+-]?\d+(\.\d+)?$/.test(str);
}

const parsedata = JSON.parse(bacadata);

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
        parsedata.push(jawab);
        const parsingdata = JSON.stringify(parsedata, null, 2);
        const writefile = fs.writeFileSync('dataitem.json', parsingdata, 'utf-8');
    }
}

const bacadatalagi = fs.readFileSync(PATH_FILE, 'utf-8', (err) => {
    if (err){
        console.error('Error Reading File!!!!', err);
        return;
    }
});

console.log("Isi JSON : \n" + bacadatalagi);
//next buat pengacaknya, ini checkpointnya