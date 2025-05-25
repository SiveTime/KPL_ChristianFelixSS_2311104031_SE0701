import fs from 'fs';

class KuliahMahasiswa {
  static readJson() {
    const rawData = fs.readFileSync('./src/tp7_2_2311104031.json', 'utf-8');
    const data = JSON.parse(rawData);

    console.log('Daftar mata kuliah yang diambil:');
    data.courses.forEach((course, index) => {
      console.log(`MK ${index + 1}: ${course.code} - ${course.name}`);
    });
  }
}

export default KuliahMahasiswa;