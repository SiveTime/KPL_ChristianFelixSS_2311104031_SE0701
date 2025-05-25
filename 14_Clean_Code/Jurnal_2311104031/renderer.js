const { calculateExponent } = require('./pangkat');

/**
 * Fungsi yang menangani klik tombol hitung
 */
function handleCalculate() {
  const base = parseInt(document.getElementById('inputA').value);
  const exponent = parseInt(document.getElementById('inputB').value);
  const result = calculateExponent(base, exponent);

  document.getElementById('output').textContent = result;
}

window.handleCalculate = handleCalculate;
