class KodeBuah {
    static kodeBuahDict = {
        "apel": "A00",
        "aprikot": "B00",
        "alpukat": "C00",
        "pisang": "D00",
        "paprika": "E00",
        "blackberry": "F00",
        "ceri": "H00",
        "kelapa": "I00",
        "jagung": "J00",
        "kurma": "K00",
        "durian": "L00",
        "anggur": "M00",
        "melon": "N00",
        "semangka": "O00"
    };

    static getKodeBuah(namaBuah) {
        return this.kodeBuahDict[namaBuah.toLowerCase()] || "Kode buah tidak ditemukan";
    }

    static getListNamaBuah() {
        return Object.keys(this.kodeBuahDict).map(buah => buah.charAt(0).toUpperCase() + buah.slice(1));
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Daftar Nama Buah:");
console.log(KodeBuah.getListNamaBuah().join(", "));

readline.question("Masukkan nama buah: ", (namaBuah) => {
    console.log(`Kode Buah ${namaBuah}: ${KodeBuah.getKodeBuah(namaBuah)}`);
    readline.close();
});
