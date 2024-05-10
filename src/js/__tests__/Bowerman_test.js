import Bowerman from '../Bowerman';

test('Creating the Bowerman class', () => {
  const result = new Bowerman('bower', 'Bowerman');
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'bower',
    type: 'Bowerman',
  };
  expect(result).toEqual(expected);
});
