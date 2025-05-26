let jmlAngkot = 20;
let operasi = 18;
let noAngkot = 1;

while (noAngkot <= operasi) {
    console.log(`Angkot No ${noAngkot} Sedang Beroperasi dengan baik`);

    noAngkot++;
}

for (noAngkot = operasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log(`Angkot No ${noAngkot} Sedang tidak Beroperasi`)
}

//bonus looping
// for(let i = 1; i <= 100; i++) {
//     console.log(`${i}. text`)
// }