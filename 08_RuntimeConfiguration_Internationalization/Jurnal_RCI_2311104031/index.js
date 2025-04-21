import readline from 'readline';
import BankTransferConfig from './BankTransferConfig.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const config = new BankTransferConfig().getConfig();

const askAmount = () => {
  const lang = config.lang;
  const askText = lang === 'en' ? 
    'Please insert the amount of money to transfer: ' : 
    'Masukkan jumlah uang yang akan di-transfer: ';
  
  rl.question(askText, (amountStr) => {
    const amount = parseInt(amountStr);
    const fee = amount <= config.transfer.threshold ? 
      config.transfer.low_fee : 
      config.transfer.high_fee;
    const total = amount + fee;

    if (lang === 'en') {
      console.log(`Transfer fee = ${fee}`);
      console.log(`Total amount = ${total}`);
    } else {
      console.log(`Biaya transfer = ${fee}`);
      console.log(`Total biaya = ${total}`);
    }

    askMethod(lang);
  });
};

const askMethod = (lang) => {
  console.log(lang === 'en' ? 'Select transfer method:' : 'Pilih metode transfer:');
  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  rl.question('', () => {
    askConfirmation(lang);
  });
};

const askConfirmation = (lang) => {
  const confirmKey = config.confirmation[lang];
  const confirmPrompt = lang === 'en' ?
    `Please type "${confirmKey}" to confirm the transaction: ` :
    `Ketik "${confirmKey}" untuk mengkonfirmasi transaksi: `;

  rl.question(confirmPrompt, (answer) => {
    if (answer.toLowerCase() === confirmKey.toLowerCase()) {
      console.log(lang === 'en' ? 'The transfer is completed' : 'Proses transfer berhasil');
    } else {
      console.log(lang === 'en' ? 'Transfer is cancelled' : 'Transfer dibatalkan');
    }
    rl.close();
  });
};

askAmount();
