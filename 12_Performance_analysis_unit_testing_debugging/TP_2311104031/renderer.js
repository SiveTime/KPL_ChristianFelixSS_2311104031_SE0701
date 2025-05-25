function CariTandaBilangan(a) {
  if (a < 0) return "Negatif";
  if (a > 0) return "Positif";
  return "Nol";
}

function handleCheck() {
  const input = document.getElementById('inputNumber').value;
  const hasil = CariTandaBilangan(parseInt(input));
  document.getElementById('output').textContent = hasil;
}
