import Zombie from '../Zombie';

test('Creating the Zombie class', () => {
  const result = new Zombie('zomb', 'Zombie');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'zomb',
    type: 'Zombie',
  };
  expect(result).toEqual(expected);
});
