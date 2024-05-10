import Daemon from '../Daemon';

test('Creating the Daemon class', () => {
  const result = new Daemon('daem', 'Daemon');
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'daem',
    type: 'Daemon',
  };
  expect(result).toEqual(expected);
});
