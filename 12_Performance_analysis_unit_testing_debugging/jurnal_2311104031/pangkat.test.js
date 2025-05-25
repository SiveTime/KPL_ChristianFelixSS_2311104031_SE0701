const { CariNilaiPangkat } = require('./pangkat');

test('b = 0, return selalu 1', () => {
  expect(CariNilaiPangkat(0, 0)).toBe(1);
  expect(CariNilaiPangkat(10, 0)).toBe(1);
});

test('b negatif, return -1', () => {
  expect(CariNilaiPangkat(3, -2)).toBe(-1);
});

test('b > 10, return -2', () => {
  expect(CariNilaiPangkat(2, 11)).toBe(-2);
});

test('a > 100, return -2', () => {
  expect(CariNilaiPangkat(101, 5)).toBe(-2);
});

test('hasil overflow, return -3', () => {
  
  expect(CariNilaiPangkat(100, 9)).toBe(-3);
});

test('hitung pangkat normal, return hasil benar', () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);     
  expect(CariNilaiPangkat(5, 2)).toBe(25);    
});
