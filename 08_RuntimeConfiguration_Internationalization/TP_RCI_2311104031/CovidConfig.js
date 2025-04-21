import fs from 'fs';

class CovidConfig {
  constructor() {
    this.path = './covid_config.json';
    this.default = {
      satuan_suhu: 'celcius',
      batas_hari_deman: 14,
      pesan_ditolak: 'Anda tidak diperbolehkan masuk ke dalam gedung ini',
      pesan_diterima: 'Anda dipersilahkan untuk masuk ke dalam gedung ini'
    };

    // Cek apakah file config sudah ada
    if (fs.existsSync(this.path)) {
      const raw = fs.readFileSync(this.path);
      this.config = JSON.parse(raw);
    } else {
      this.config = this.default;
      this.saveConfig();
    }
  }

  getConfig() {
    return this.config;
  }

  saveConfig() {
    fs.writeFileSync(this.path, JSON.stringify(this.config, null, 2));
  }

  UbahSatuan() {
    if (this.config.satuan_suhu === 'celcius') {
      this.config.satuan_suhu = 'fahrenheit';
    } else {
      this.config.satuan_suhu = 'celcius';
    }
    this.saveConfig();
    console.log(`Satuan suhu berhasil diubah ke ${this.config.satuan_suhu}`);
  }
}

export default CovidConfig;
