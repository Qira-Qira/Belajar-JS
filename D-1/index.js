let nama = prompt('Masukkan nama Anda');


if(nama <= null){
    location.reload();
}else{
    alert(`halo ${nama}`);
}

let hari = new Date().getDay();

switch (hari) {
    case 1:
        hari = "Senin";
        break;
    case 2:
        hari = "Selasa";
        break;
    case 3:
        hari = "Rabu";
        break;
    case 4:
        hari = "Kamis";
        break;
    case 5:
        hari = "Jumat";
        break;
    case 6:
        hari = "Sabtu";
        break;
    case 7:
        hari = "Minggu";
        break;
};
console.log(hari);

document.writeln(`Selamat datang ${nama} Hari ini adalah hari ${hari}`);