const { promedio, suma, resta } = require('./funciones');

test('calcula el promedio de 3 números', () => {
    expect(promedio(10, 20, 30)).toBe(20);
});

test('suma dos números', () => {
    expect(suma(5, 7)).toBe(12);
});

test('resta dos números', () => {
    expect(resta(10, 4)).toBe(6);
});
