const readline = require('readline');

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function bagianC() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question("Masukkan angka (1-10000): ", (nilaiString) => {
        const nilaiInt = parseInt(nilaiString);
        if (isNaN(nilaiInt) || nilaiInt < 1 || nilaiInt > 10000) {
            console.log("Input tidak valid. Harus berupa angka antara 1 dan 10000.");
        } else {
            if (isPrime(nilaiInt)) {
                console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
            } else {
                console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
            }
        }
        rl.close();
    });
}

bagianC();