import Magician from '../Magician';

test('Creating the Magician class', () => {
  const result = new Magician('magic', 'Magician');
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'magic',
    type: 'Magician',
  };
  expect(result).toEqual(expected);
});
