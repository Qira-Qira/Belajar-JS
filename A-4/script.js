// Soal nomor 1
// Membuat object
const siswa = {
    nama: "Doni",
    umur: 16,
    kelas: "11 B",
    isActive: true
}

// Soal nomor 2
// Menampilkan semua object
// console.log(siswa);
// Hanya menampilkan nama
// console.log(siswa.nama);
// Hanya menampilkan umur
// console.log(siswa.umur);

// Soal nomor 3
// Mengubah properti
// siswa.nama = "stev";
// siswa.umur = 14;
// console.log(siswa);
// Menambahkan properti
// siswa.hobi = "basket";
// console.log(siswa);

// Soal nomor 4
// Membuat array yang berisi 3 object
const siswaBaru = [
    {nama: "Budi", umur: 15},
    {nama: "Siti", umur: 17},
    {nama: "Fikri", umur: 18}
]

// Soal nomor 5
// Menampilkan semua data siswa baru
for(const murid of siswaBaru) {
    console.log("Nama: ", murid.nama, "| umur: ", murid.umur);
}