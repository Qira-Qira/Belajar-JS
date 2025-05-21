const angkaBenar = Math.floor(Math.random() * 10) + 1;
let kesempatan = 3;
let menang = false;

while(kesempatan > 0 && !menang) {
    let tebakan = parseInt(prompt("Tebak angka antara 1 dan 10: \nKesempatan: " + kesempatan));
    tebakan = parseInt(tebakan);

    if(tebakan === angkaBenar) {
        alert("Selamat! Tebakan Anda benar!");
        menang = true;
    }else if(tebakan < angkaBenar) {
        alert("Tebakan Anda terlalu rendah. Coba lagi!");
    }else if(tebakan > angkaBenar) {
        alert("Tebakan Anda terlalu tinggi. Coba lagi!");
    }else{
        alert("Input tidak valid. Masukkan angka yang benar.");
        continue;
    }

    kesempatan--;
}

if(!menang) {
    alert("Kesempatan habis! Angka yang benar adalah " + angkaBenar + ".");
}