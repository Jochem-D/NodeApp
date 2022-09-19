const sum = require('./sum');

test('six and nine is sixtynine', () => {
    expect(sum(60, 9)).toBe(69);
});