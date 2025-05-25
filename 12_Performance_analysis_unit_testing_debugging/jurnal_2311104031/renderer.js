const { CariNilaiPangkat } = require('./pangkat');

function handleHitung() {
  const a = parseInt(document.getElementById('inputA').value);
  const b = parseInt(document.getElementById('inputB').value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById('output').textContent = hasil;
}
