const PusatDataSingleton = require('./pusatDataSingleton');

const data1 = PusatDataSingleton.GetDataSingleton();
const data2 = PusatDataSingleton.GetDataSingleton();

data1.AddSebuahData("Christian Felix");
data1.AddSebuahData("Revan Kurniawan");
data1.AddSebuahData("Fazza Abiyu");

console.log("\nData dari data2:");
data2.PrintSemuaData();

data2.HapusSebuahData(1);

console.log("\nSetelah dihapus dari data2, cek data1:");
data1.PrintSemuaData();

console.log(`\nJumlah elemen data1: ${data1.GetSemuaData().length}`);
console.log(`Jumlah elemen data2: ${data2.GetSemuaData().length}`);
