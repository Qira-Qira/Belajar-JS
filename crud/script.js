let listNama = [];

const tambahNama = () => {
    const input = document.getElementById('inputNama');
    const namaBaru = input.value;

    if (namaBaru !== '') {
        listNama.push(namaBaru);
        input.value = '';

        tampilkanNama();
    }
}

const tampilkanNama = () => {
    const daftar = document.getElementById('daftarNama');
    daftar.innerHTML = '';

    for (let i = 0; i < listNama.length; i++) {
        const li = document.createElement('li');
        li.textContent = listNama[i];
        daftar.appendChild(li);
    }
}