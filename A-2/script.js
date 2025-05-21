// Soal nomor 1
// const angka = 4; // ketika angka yang di input genap maka hasilnya genap atau sebaliknya
// (angka % 2 == 0) ? console.log("Genap") : console.log("Ganjil"); // cek kondisi genap atau ganjil menggunakan operator ternary (dikarenakan cuma ada 2 kondisi)

// Soal nomor 2
// Contoh menggunakan function declaration
// function angka(x, y) {
//     console.log(x + y);
// };
// angka(2, 4);
// Contoh menggunakan function expression
// const angka = function (x, y) {
//     return x + y;
// };
// console.log(angka(2,2));
// Contoh menggunakan arrow function
// const angka = (x, y) => {
//     return x + y;
// };
// console.log(angka(9, 5));

// Soal nomor 3
// const nilai = "C";
// switch (nilai) {
//     case "A":
//     case "B":
//         console.log("Lulus");
//         break;
//     case "C":
//         console.log("Lulus bersyarat");
//         break;
//     case "D":
//         console.log("Tidak lulus");
//         break;
//     default:
//         console.log("Masukkan Nilai yang benar");
// }

// Tips bonus
// pengecekan ganjil dan genap menggunakan Gabungan antara operator ternary dengan arrow function
// const cekAngka = (angka) => (angka % 2 === 0) ? "Genap" : "Ganjil";
// console.log(cekAngka(3));
// Terjemahan dari kode di atas menggunakan function declaration dan kondisi if condition
// function cekAngka(angka) {
//     if(angka % 2 === 0) {
//         console.log("Genap");
//     }else{
//         console.log("Ganjil");
//     }

//     return angka;
// };
// cekAngka(3);