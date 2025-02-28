const suma = require('./index');

test('suma 2 + 3 y obtiene 5', () => {
  expect(suma(2, 3)).toBe(5);
});