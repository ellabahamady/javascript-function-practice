const { modulo } = require('./function1');

test('angka habis dibagi 3 cetak "fish"', () => {
  expect(modulo(12)).toBe("fish");
});

test('angka habis dibagi 5 cetak "bash"', () => {
  expect(modulo(10)).toBe("bash");
});

test('angka habis dibagi 15 cetak "fish bash"', () => {
    expect(modulo(15)).toBe("fish bash");
});