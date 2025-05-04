const Aljabar = require('./aljabarLibraries');

const akar = Aljabar.AkarPersamaanKuadrat([1, -3, -10]);
console.log("Akar dari x^2 - 3x - 10 = 0 adalah:", akar);

const kuadrat = Aljabar.HasilKuadrat([2, -3]);
console.log("Hasil kuadrat dari (2x - 3)^2 adalah:", kuadrat);
