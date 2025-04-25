// Cara membuat object pada JavaScript
// 1. Object Literal
//PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: "Doni",
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;

//         console.log(`Halo ${this.nama} sedang makan`);
//     }
// }
// let mahasiswa2 = {
//     nama: "Steven",
//     energi: 20,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;

//         console.log(`Halo ${this.nama} sedang makan`);
//     }
// }


// 2. Function Declaration
// function Mahasiswa(nama,energi){
//     let mahasiswa = {};

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Sedang Makan`);
//     }

//     mahasiswa.kerja = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Sedang Kerja`);
//     }

//     return mahasiswa;
// }

// let doni = Mahasiswa('Doni', 60);
// let stev = Mahasiswa('Stev', 30);

//mirip seperti object create
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Sedang Makan`);
//     },

//     kerja: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Sedang Kerja`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Sedang Tidur`);
//     }

// }

// function Mahasiswa(nama,energi) {
//     let mahasiswa = {};

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.kerja = methodMahasiswa.kerja;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let doni = Mahasiswa('Doni', 60);
// let stev = Mahasiswa('Stev', 90);


// 3. Constructor Function
//keyword new
// function Mahasiswa(nama,energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Sedang Makan`);
//     }

//     this.kerja = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Sedang Kerja`);
//     }
// }

// let doni = new Mahasiswa('Doni',10);
// let stev = new Mahasiswa('Stev',20);



//4 Object.create()
const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Sedang Makan`);
    },

    kerja: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Sedang Kerja`);
    },

    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Sedang Tidur`);
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let doni = Mahasiswa('Doni',10);
let stev = Mahasiswa('Stev', 20);