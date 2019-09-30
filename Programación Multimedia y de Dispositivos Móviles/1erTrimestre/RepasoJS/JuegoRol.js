const STR = 0;
const SPD = 1;
const VIT = 2;
const DEX = 3;
const MAG = 4;

function diceThrow(sides = 20) {
  //   result = Math.floor( Math.random() * sides + 1);
  //   console.log(result);
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
    // atributes.push("soy humano");
  }
  if (race == "Elven") {
    atributes.push(6 + diceThrow(4) + diceThrow(4)); // STR
    atributes.push(diceThrow()); // SPD
    atributes.push(diceThrow(12)); // VIT
    atributes.push(3 + diceThrow(10) + diceThrow(10)); // DEX
    atributes.push(diceThrow()); // MAG
    // atributes.push("soy Elven");
  }
  if (race == "Dwarf") {
    atributes.push(10 + diceThrow(10)); // STR
    atributes.push(diceThrow(8) + diceThrow(8)); // SPD
    atributes.push(10 + diceThrow(8)); // VIT
    atributes.push(diceThrow()); // DEX
    atributes.push(diceThrow(8)); // MAG
    // atributes.push("soy Dwarf");
  }
  if (race == "Mage") {
    atributes.push(diceThrow(6)); // STR
    atributes.push(diceThrow()); // SPD
    atributes.push(diceThrow(10)); // VIT
    atributes.push(diceThrow()); // DEX
    atributes.push(12 + diceThrow(8)); // MAG
    // atributes.push("soy Mage");
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

function simulateBattle(
  firstRace,
  firstCharacterStats,
  secondRace,
  secondCharacterStats
) {
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

  if (Player1.RPGCharacter[SPD] >= Player2.RPGCharacter[SPD]) {
    faster = Player1.race;
    console.log(Player1.RPGCharacter);
    console.log(Player2.RPGCharacter);
    console.log(Player1.RPGCharacter[SPD]);
    console.log(Player2.RPGCharacter[SPD]);
  } else {
    faster = Player2.race;

    console.log(Player1.RPGCharacter);
    console.log(Player2.RPGCharacter);
    console.log(Player1.RPGCharacter[SPD]);
    console.log(Player2.RPGCharacter[SPD]);
  }

  return "es más veloz es el:" + faster;
}

// console.log(diceThrow());
// console.log(atributes);
let firstRace = "Human";
let firstCharacterStats = createRPGCharacter(firstRace);

let secondRace = "Elven";
let secondCharacterStats = createRPGCharacter(secondRace);

// console.log(firstRace);
// console.log(firstCharacterStats);

console.log(simulateBattle(firstRace, firstCharacterStats, secondRace, secondCharacterStats));

// console.log(atributes);

// console.log(getDamage('Human', atributes));
