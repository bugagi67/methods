import Undead from '../Undead';

test('Creating the Undead class', () => {
  const result = new Undead('undea', 'Undead');
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'undea',
    type: 'Undead',
  };
  expect(result).toEqual(expected);
});
