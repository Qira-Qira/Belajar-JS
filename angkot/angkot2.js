let jmlAngkot = 100;
let operasi = 84;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= operasi) {
        console.log(`Angkot No.${noAngkot} Sedang beroperasi dengan baik`);
    } else {
        console.log(`Angkot No.${noAngkot} sedang tidak beroperasi`);
    }
}


// const angka = 20;
// if(angka % 2 === 0) {
//     console.log("Genap");
// }else{
//     console.log("Ganjil");
// }

// for(let i = 1; i <= 20; i++) {
//     if(i % 15 === 0){
//         console.log("Fizz Buzz");
//     }else if (i % 3 === 0) {
//         console.log("Fizz");
//     }else if (i % 5 === 0) {
//         console.log("Buzz");
//     }else{
//         console.log(i)
//     }
// }

// let total = 0;
// for(let i = 1; i <= 100; i++) {
//     if(i % 2 !== 0) {
//         total += i;
//     }
// }

// console.log("Jumlah semua angka ganjil adalah " + total);