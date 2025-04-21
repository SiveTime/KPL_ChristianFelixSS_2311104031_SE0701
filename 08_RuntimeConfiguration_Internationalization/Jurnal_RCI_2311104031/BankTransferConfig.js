import fs from 'fs';

class BankTransferConfig {
  constructor() {
    this.configPath = './bank_transfer_config.json';
    this.defaultConfig = {
      lang: 'en',
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000
      },
      methods: ['RTO (real-time)', 'SKN', 'RTGS', 'BI FAST'],
      confirmation: {
        en: 'yes',
        id: 'ya'
      }
    };

    if (fs.existsSync(this.configPath)) {
      const raw = fs.readFileSync(this.configPath);
      this.config = JSON.parse(raw);
    } else {
      this.config = this.defaultConfig;
      fs.writeFileSync(this.configPath, JSON.stringify(this.defaultConfig, null, 2));
    }
  }

  getConfig() {
    return this.config;
  }
}

export default BankTransferConfig;
