import Character from './js/Character';
import Bowerman from './js/Bowerman';
import Daemon from './js/Daemon';
import Magician from './js/Magician';
import Swordsman from './js/Swordsman';
import Undead from './js/Undead';
import Zombie from './js/Zombie';

const character = new Character('char', 'Bowerman');
character.levelUp();
const bowerman = new Bowerman('char', 'Bowerman');
const daemon = new Daemon('char', 'Daemon');
const magician = new Magician('char', 'Magician');
const swordsman = new Swordsman('char', 'Swordsman');
const undead = new Undead('char', 'Undead');
const zombie = new Zombie('char', 'Zombie');

console.log(character, bowerman, daemon, magician, swordsman, undead, zombie);
