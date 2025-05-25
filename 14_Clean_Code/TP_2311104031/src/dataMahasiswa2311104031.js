import fs from 'fs';

class DataMahasiswa {
  static readJson() {
    const rawData = fs.readFileSync('./src/tp7_1_2311104031.json', 'utf-8');
    const data = JSON.parse(rawData);

    const fullName = `${data.nama.depan} ${data.nama.belakang}`;
    console.log(
      `Nama ${fullName} dengan NIM ${data.nim} dari fakultas ${data.fakultas}`
    );
  }
}

export default DataMahasiswa;