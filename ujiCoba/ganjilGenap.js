// 1. cek apakah angka ganjil atau genap
const cekAngkaGanjilGenap = (x) => {
    let angka = x;
    const hasil = (angka % 2 === 0) ? 'Genap' : 'Ganjil';

    return hasil;
}
console.log(cekAngkaGanjilGenap(11));



// 2. penjumlahan angka
const jumlahAngka = (x, y) => {
    let angka1;
    let angka2;
    let hasil;

    angka1 = x;
    angka2 = y;
    hasil = angka1 + angka2;

    return hasil;
}
console.log(jumlahAngka(3, 4));

// 3. kapital
const kapitalAwal = (str) => {
    let hasil;

    hasil = str.charAt(0).toUpperCase() + str.slice(1);

    return hasil;
}
console.log(kapitalAwal("hello world"))



// 4. RNG
const tebakAngka = (tebakan) => {
    // aku udah buntu maaf ya...
}
