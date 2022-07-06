// Classes and OOP Demo

// Basic Elements of a Class
// Name of the class
// All classes have a constructor
// Attributes that go in the constructor
// Classes have methods that allow us to perform actions

class Character {
    constructor(name, health, strength, intelligence) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.intelligence = intelligence;
    }

    attack(target) {
        target.health -= this.strength;
        console.log(`${this.name} attacked ${target.name} dealing ${this.strength} damage`);
        console.log(`${target.name} now has ${target.health} HP`);
    }
}

// Introducing Inheritance
class MagicUser extends Character {
    constructor(name, health, strength, intelligence, mana) {
        super(name, health, strength, intelligence);
        this.mana = mana;
    }

    attack(target) {
        target.health -= this.intelligence;
        this.mana -= 8;
        console.log(`${this.name} fires a spell at ${target.name} dealing ${this.intelligence} damage`);
        console.log(`${target.name} now has ${target.health} HP`);
    }
}

const char1 = new Character("Link", 10, 8, 6);
const char2 = new Character("Ganondorf", 50, 12, 14);
// console.log(char1.name);
char1.attack(char2);
char2.attack(char1);

const char3 = new MagicUser("Zelda", 20, 7, 15, 50);
char3.attack(char2);