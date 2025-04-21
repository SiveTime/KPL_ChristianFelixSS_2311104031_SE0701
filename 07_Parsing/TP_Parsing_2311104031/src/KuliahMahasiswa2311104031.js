import fs from 'fs';

class KuliahMahasiswa2311104031 {
  static ReadJSON() {
    const rawData = fs.readFileSync('./src/tp7_2_2311104031.json');
    const data = JSON.parse(rawData);

    console.log("Daftar mata kuliah yang diambil:");
    data.courses.forEach((mk, index) => {
      console.log(`MK ${index + 1} ${mk.code} - ${mk.name}`);
    });
  }
}

export default KuliahMahasiswa2311104031;
