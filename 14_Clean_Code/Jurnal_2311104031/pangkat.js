/**
 * Menghitung nilai a pangkat b dengan validasi
 * @param {number} a - basis
 * @param {number} b - eksponen
 * @returns {number} hasil perhitungan atau kode error
 */
function calculateExponent(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  try {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result = checkedMultiply(result, a);
    }
    return result;
  } catch (err) {
    return -3;
  }
}

/**
 * Mengalikan dua bilangan dengan overflow check
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function checkedMultiply(a, b) {
  const result = a * b;
  if (result > Number.MAX_SAFE_INTEGER) {
    throw new Error('Overflow');
  }
  return result;
}

module.exports = { calculateExponent };