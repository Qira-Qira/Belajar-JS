let tinggi = 5;

for (let i = 1; i <= tinggi; i++) {
    let spasi = ' '.repeat(tinggi - i);
    let bintang = '*'.repeat(2 * i - 1);

    console.log(spasi + bintang)
}

for (let i = tinggi - 1; i >= 1; i--) {
    let spasi = ' '.repeat(tinggi - i)
    let bintang = '*'.repeat(2 * i - 1)
    console.log(spasi + bintang)
}