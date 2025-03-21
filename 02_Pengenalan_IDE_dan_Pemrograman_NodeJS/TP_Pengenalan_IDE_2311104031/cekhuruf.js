const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cekHuruf() {
    rl.question("Masukkan satu huruf: ", (huruf) => {
        huruf = huruf.toUpperCase();
        const vokal = ['A', 'I', 'U', 'E', 'O'];
        
        if (vokal.includes(huruf)) {
            console.log(`Huruf ${huruf} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${huruf} merupakan huruf konsonan`);
        }
        rl.close();
    });
}

if (require.main === module) {
    cekHuruf();
}

module.exports = cekHuruf;