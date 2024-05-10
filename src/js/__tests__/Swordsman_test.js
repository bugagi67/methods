import Swordsman from '../Swordsman';

test('Creating the Swordsman class', () => {
  const result = new Swordsman('sword', 'Swordsman');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'sword',
    type: 'Swordsman',
  };
  expect(result).toEqual(expected);
});
