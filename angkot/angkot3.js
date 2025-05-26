// let angka = prompt("Masukkan Angka");

// if(angka % 2 == 0) {
//     alert(angka + ' Genap');
// }else if (angka % 2 == 1) {
//     alert(angka + ' Ganjil');
// }else{
//     alert('Tolong Masukkan angka');
// }

let jmlAngkot = 10;
let maintenance = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= maintenance && noAngkot !== 5) {
        console.log(`Angkot No. ${noAngkot} Sedang berjalan dengan baik`)
    } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log(`Angkot No. ${noAngkot} sedang lembur`)
    } else {
        console.log(`Angkot No ${noAngkot} sedang dalam perbaikan`)
    }
}