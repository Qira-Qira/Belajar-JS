// Menampilkan isi array
// const arr = ['doni','purbalingga','stevy'];

// for(let i = 0; i < arr.length; i++) {
//     console.log('Ranking ke: ' + (i+1) + ' ' + arr[i]);
// }



// Method pada array
// 1. join untuk menampilkan array
const buah = ['apel', 'pisang', 'jeruk']
console.log(buah.join('\n'));



// 2. push & pop (push untuk menambahkan elemen atau nilai pada bagian akhir sedangkan pop untuk menghapus array pada bagian akhir)
buah.push('mangga', 'melon', 'anggur');
buah.pop();

console.log(buah.join('\n'));


// 3. unshift & shift (unshift untuk menambahkan elemen atau nilai pada bagian awal sedangkan shift untuk menghapus array pada bagian awal !!kebalikan dadi push dan pop!!)
buah.unshift('durian', 'pepaya');
buah.shift();


console.log(buah.join('\n'));

// 4. splice & slice (splice untuk menambah atau menghapus pada bagian tengah tengah array sedangkan slice mengambil array)
// rumus splice
// arr.splice(indexAwal,elemenYangDiHapus,elementBaru1,elementBaru2,dst ....)
buah.splice(2, 0, 'nangka', 'rambutan');
console.log(buah.join('\n'))

// rumus slice
// variable array = arr.slice(awal,akhir) tetapi yang akan di eksekusi adalah bagian awal dan tengah nya bukan akhir
const array = buah.slice(3, 5);
console.log(array.join('\n'))




// 5. forEach & map (forEach untuk menampilkan hasill array seperti looping tetapi kita tidak perlu membuah for loop seperti sebelumnya sedangkan map mirip dengan forEach tetapi map sendiri untuk mengembalikan nilai pada array jadi harus hati hati)

//forEach

const listBuah = buah.forEach(function (e) {
    console.log(e);
})

//map
const angka = [1, 2, 3, 4, 5, 6, 7, 8];
const hitung = angka.map(function (e) {
    return e * 2;
})
console.log(hitung.join('\n'));



// 6. sort (mengurutkan angka mulai dari terkecil hingga terbesar)

const acak = [5, 1, 3, 8, 2, 9, 4, 40, 30, 10];
console.log(acak.sort((a, b) => { return a - b }));



// 7. filter & find (filter bisa mengembalikan banyak nilai sedangkan find hanya mengembalikan satu nilai)

//filter
const cetak = acak.filter((e) => {
    return e > 5;
})

console.log(cetak.join('\n'))

//find
const cetak2 = acak.find((e) => {
    return e > 5;
})
console.log(cetak2)

