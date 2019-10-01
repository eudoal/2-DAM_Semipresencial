const rl = require('readline-sync');

const STR = 0;
const SPD = 1;
const VIT = 2;
const DEX = 3;
const MAG = 4;

function diceThrow(sides = 20) {

  return Math.floor(Math.random() * sides + 1);
}

function createRPGCharacter(race) {

  let atributes = [];

  if (race == "Human") {
    atributes.push(8 + diceThrow(6) + diceThrow(6)); // STR
    atributes.push(4 + diceThrow(6)); // SPD
    atributes.push(diceThrow()); // VIT
    atributes.push(diceThrow()); // DEX
    atributes.push(diceThrow(10)); // MAG
  }

  if (race == "Elven") {
    atributes.push(6 + diceThrow(4) + diceThrow(4)); // STR
    atributes.push(diceThrow()); // SPD
    atributes.push(diceThrow(12)); // VIT
    atributes.push(3 + diceThrow(10) + diceThrow(10)); // DEX
    atributes.push(diceThrow()); // MAG
  }

  if (race == "Dwarf") {
    atributes.push(10 + diceThrow(10)); // STR
    atributes.push(diceThrow(8) + diceThrow(8)); // SPD
    atributes.push(10 + diceThrow(8)); // VIT
    atributes.push(diceThrow()); // DEX
    atributes.push(diceThrow(8)); // MAG
  }

  if (race == "Mage") {
    atributes.push(diceThrow(6)); // STR
    atributes.push(diceThrow()); // SPD
    atributes.push(diceThrow(10)); // VIT
    atributes.push(diceThrow()); // DEX
    atributes.push(12 + diceThrow(8)); // MAG
  }
  return atributes;
}

function getDamage(race, atributes) {

  let damage = [];

  if (race == "Human") {

    damage.push(1.5 * atributes[STR] + 0.4 * atributes[DEX]);
  }

  if (race == "Elven") {

    damage.push(atributes[STR] + 1.2 * atributes[DEX] + 0.1 * atributes[MAG]);
  }
  if (race == "Dwarf") {

    damage.push(2 * atributes[STR]);
  }
  if (race == "Mage") {

    damage.push(2 * atributes[MAG] + 0.1 * atributes[DEX]);
  }

  return Math.ceil(damage);
}

function getDefense(race, atributes) {
  let defense = [];

  if (race == "Human") {
    defense.push(atributes[VIT] + 0.2 * atributes[SPD]);
  }
  if (race == "Elven") {

    defense.push(1.3 * atributes[SPD] + 0.5 * atributes[VIT]);
  }
  if (race == "Dwarf") {

    defense.push(1.1 * atributes[VIT] + 1.1 * atributes[STR]);
  }
  if (race == "Mage") {

    defense.push(0.8 * atributes[MAG] + 0.3 * atributes[SPD]);
  }

  return Math.ceil(defense);
}

function getHealthPoints(race, atributes) {

  let healthPoints = [];

  if (race == "Human") {

    healthPoints.push(atributes[STR] + atributes[VIT] + 10);
  }

  if (race == "Elven") {

    healthPoints.push(atributes[STR] + atributes[DEX] + 5);
  }
  if (race == "Dwarf") {

    healthPoints.push(1.1 * atributes[STR] + atributes[VIT] + 15);
  }
  if (race == "Mage") {

    healthPoints.push(atributes[MAG] + atributes[VIT] + 3);
  }

  return Math.ceil(healthPoints);

  //No lo pone en la documentación, pero he supuesto que se redondea el resultado también hacia arriba

}

function simulateBattle(firstRace, firstCharacterStats, secondRace, secondCharacterStats) {

  let Player1 = {
    race: firstRace,
    RPGCharacter: firstCharacterStats,
    damage: getDamage(firstRace, firstCharacterStats),
    defense: getDefense(firstRace, firstCharacterStats),
    healthPoints: getHealthPoints(firstRace, firstCharacterStats)
  };

  let Player2 = {
    race: secondRace,
    RPGCharacter: secondCharacterStats,
    damage: getDamage(secondRace, secondCharacterStats),
    defense: getDefense(secondRace, secondCharacterStats),
    healthPoints: getHealthPoints(secondRace, secondCharacterStats)
  };

  let turns = 0;
  let dead = '';

  if (Player1.RPGCharacter[SPD] > Player2.RPGCharacter[SPD]) {

    faster = Player1.race;

  } else {

    faster = Player2.race;

  }

  while (Player1.healthPoints > 0 && Player2.healthPoints > 0) {

    if (faster == Player1.race) {
      // console.log("ataca primero : " + Player1.race);
      // console.log("la vida de: " + Player2.race + " es: " + Player2.healthPoints);
      // console.log("la defensa de: " + Player2.race + " es: " + Player2.defense);
      // console.log("el: " + Player1.race + "hace un daño de: " + Player1.damage);
      Player2.healthPoints = Player2.healthPoints + Player2.defense - Player1.damage;
      // console.log("la vida de: " + Player2.race + " es: " + Player2.healthPoints);
      turns++;
      dead = 'second';

      if (Player2.healthPoints > 0) {
        // console.log("ataca despues : " + Player2.race);
        // console.log("la vida de: " + Player1.race + " es: " + Player1.healthPoints);
        // console.log("la defensa de: " + Player1.race + " es: " + Player1.defense);
        // console.log("el: " + Player2.race + "hace un daño de: " + Player2.damage);
        Player1.healthPoints = Player1.healthPoints + Player1.defense - Player2.damage;
        // console.log("la vida de: " + Player1.race + " es: " + Player1.healthPoints);
        turns++;
        dead = 'first';

      } 

    } else {
        // console.log("ataca primero : " + Player2.race);
        // console.log("la vida de: " + Player1.race + " es: " + Player1.healthPoints);
        // console.log("la defensa de: " + Player1.race + " es: " + Player1.defense);
        // console.log("el: " + Player2.race + "hace un daño de: " + Player2.damage);
        Player1.healthPoints = Player1.healthPoints + Player1.defense - Player2.damage;
        // console.log("la vida de: " + Player1.race + " es: " + Player1.healthPoints);
        turns++;
        dead = 'first';

      if (Player1.healthPoints > 0) {

        // console.log("ataca despues : " + Player1.race);
        // console.log("la vida de: " + Player2.race + " es: " + Player2.healthPoints);
        // console.log("la defensa de: " + Player2.race + " es: " + Player2.defense);
        // console.log("el: " + Player1.race + "hace un daño de: " + Player1.damage);
        Player2.healthPoints = Player2.healthPoints + Player2.defense - Player1.damage;
        // console.log("la vida de: " + Player2.race + " es: " + Player2.healthPoints);
        turns++;
        dead = 'second';
      }
    }
  }

  return [turns, dead];
}

console.log('PLAYER 1 : Choose your race');
let firstRace = (rl.question('Human, Elven, Dwarf or Mage: '));
let firstCharacterStats = createRPGCharacter(firstRace);
console.log('');
console.log('PLAYER 2 : Choose your race');
let secondRace = (rl.question('Human, Elven, Dwarf or Mage: '));
console.log('');
let secondCharacterStats = createRPGCharacter(secondRace);

console.log(simulateBattle(firstRace,firstCharacterStats,secondRace,secondCharacterStats));