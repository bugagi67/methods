import Character from '../Character';

test('creating the character class', () => {
  const result = new Character('char', 'Bowerman');
  const expected = {
    health: 100,
    level: 1,
    name: 'char',
    type: 'Bowerman',
  };
  expect(result).toEqual(expected);
});

test('Creating a class with a name of 1 character', () => {
  expect(() => {
    const c = new Character('c', 'Bowerman');
    return c;
  }).toThrow(
    new Error('Имя должно являться строкой и содержать от 2х до 10 символов'),
  );
});

test('Creating a class with a name over 10 characters', () => {
  expect(() => {
    const qwertyuiopa = new Character('qwertyuiopa', 'Bowerman');
    return qwertyuiopa;
  }).toThrow(
    new Error('Имя должно являться строкой и содержать от 2х до 10 символов'),
  );
});

test('Creating a class with a name over 10 characters', () => {
  expect(() => {
    const character = new Character('character', 'Assasin');
    return character;
  }).toThrow(new Error('Введите допустимый тип персонажа.'));
});

test('applying the levelUp method', () => {
  const expected = {
    attack: NaN,
    defence: NaN,
    health: 100,
    level: 2,
    name: 'char',
    type: 'Bowerman',
  };
  const char = new Character('char', 'Bowerman');
  char.levelUp();
  expect(char).toEqual(expected);
});

test('applying the Level Up method to a character with 0 health', () => {
  expect(() => {
    const char = new Character('char', 'Bowerman');
    char.health = 0;
    return char.levelUp();
  }).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('applying the damage method', () => {
  const char = new Character('char', 'Bowerman');
  char.attack = 10;
  char.defence = 10;
  char.damage(20);
  expect(char).toEqual({
    attack: 10,
    defence: 10,
    health: 82,
    level: 1,
    name: 'char',
    type: 'Bowerman',
  });
});

test('applying the damage method to a character with 0 health', () => {
  expect(() => {
    const char = new Character('char', 'Bowerman');
    char.health = 0;
    char.damage(20);
  }).toThrow(new Error('Он уже мёртв'));
});
