//function declaration 
// function jumlahDuaKubus(x, y) {
//     let volumeX;
//     let volumeY;
//     let hasil;

//     volumeX = x * x * x;
//     volumeY = y * y * y;
//     hasil = volumeX + volumeY;

//     return hasil;
// }
// console.log(jumlahDuaKubus(8, 3));
// console.log(jumlahDuaKubus(12, 8));



//function expression
// const jumlahDuaKubus = function (x, y) {
//     let volumeX;
//     let volumeY;
//     let hasil;

//     volumeX = x * x * x;
//     volumeY = y * y * y;
//     hasil = volumeX + volumeY;

//     return hasil;
// }

// console.log(jumlahDuaKubus(8, 3));



// arrow function 
const jumlahDuaKubus = (x, y) => {
    return x * x * x + y * y * y;
}

console.log(jumlahDuaKubus(8, 3));