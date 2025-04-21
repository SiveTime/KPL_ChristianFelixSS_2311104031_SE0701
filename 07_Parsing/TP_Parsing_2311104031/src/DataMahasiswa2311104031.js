import fs from 'fs';

class DataMahasiswa2311104031 {
  static ReadJSON() {
    const rawData = fs.readFileSync('./src/tp7_1_2311104031.json');
    const data = JSON.parse(rawData);

    const namaLengkap = `${data.nama.depan} ${data.nama.belakang}`;
    console.log(`Nama ${namaLengkap} dengan nim ${data.nim} dari fakultas ${data.fakultas}`);
  }
}

export default DataMahasiswa2311104031;
