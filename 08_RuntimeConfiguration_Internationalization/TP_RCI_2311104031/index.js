import readline from 'readline';
import CovidConfig from './CovidConfig.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const config = new CovidConfig();
let cfg = config.getConfig();

const tanyaUbahSatuan = () => {
  rl.question(
    `Satuan suhu saat ini adalah "${cfg.satuan_suhu}". Apakah ingin mengubahnya? (y/n): `,
    (jawaban) => {
      if (jawaban.toLowerCase() === 'y') {
        config.UbahSatuan();
        cfg = config.getConfig();
      }
      tanyaSuhu();
    }
  );
};

// Input suhu dan hari demam
const tanyaSuhu = () => {
  rl.question(
    `Berapa suhu badan anda saat ini? Dalam nilai ${cfg.satuan_suhu}: `,
    (suhuStr) => {
      const suhu = parseFloat(suhuStr);
      rl.question(
        'Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ',
        (hariStr) => {
          const hari = parseInt(hariStr);
          validasi(suhu, hari);
          rl.close();
        }
      );
    }
  );
};

const validasi = (suhu, hari) => {
  let suhuNormal = false;

  if (cfg.satuan_suhu === 'celcius') {
    suhuNormal = suhu >= 36.5 && suhu <= 37.5;
  } else if (cfg.satuan_suhu === 'fahrenheit') {
    suhuNormal = suhu >= 97.7 && suhu <= 99.5;
  }

  const hariValid = hari < cfg.batas_hari_deman;

  if (suhuNormal && hariValid) {
    console.log(cfg.pesan_diterima);
  } else {
    console.log(cfg.pesan_ditolak);
  }
};

tanyaUbahSatuan();
