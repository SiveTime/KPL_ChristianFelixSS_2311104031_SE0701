const { calculateExponent } = require('./pangkat');

test('Eksponen 0 harus mengembalikan 1', () => {
  expect(calculateExponent(0, 0)).toBe(1);
  expect(calculateExponent(10, 0)).toBe(1);
});

test('Eksponen negatif harus mengembalikan -1', () => {
  expect(calculateExponent(3, -2)).toBe(-1);
});

test('Eksponen > 10 harus mengembalikan -2', () => {
  expect(calculateExponent(2, 11)).toBe(-2);
});

test('Basis > 100 harus mengembalikan -2', () => {
  expect(calculateExponent(101, 5)).toBe(-2);
});

test('Jika hasil overflow, kembalikan -3', () => {
  expect(calculateExponent(100, 9)).toBe(-3);
});

test('Perhitungan pangkat normal', () => {
  expect(calculateExponent(2, 3)).toBe(8);
  expect(calculateExponent(5, 2)).toBe(25);
});
