const { CariTandaBilangan } = require('./bilangan');

test('Mengembalikan "Negatif" untuk input kurang dari 0', () => {
  expect(CariTandaBilangan(-10)).toBe("Negatif");
});

test('Mengembalikan "Positif" untuk input lebih dari 0', () => {
  expect(CariTandaBilangan(5)).toBe("Positif");
});

test('Mengembalikan "Nol" untuk input sama dengan 0', () => {
  expect(CariTandaBilangan(0)).toBe("Nol");
});