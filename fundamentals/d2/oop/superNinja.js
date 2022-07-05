class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName = () => console.log(`My name is ${this.name}`);

    showStats = () => {
        console.log(`Name: ${this.name} | Strength: ${this.strength} | Speed: ${this.speed} | Health: ${this.health}`);
    }

    drinkSake = () => this.health += 10;
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdon = 10;
    }

    speakWisdom = () => {
        this.drinkSake();
        const message = `The essence of warrior traits are demonstrated by : integrity with self, and honesty with others`;
        console.log(message);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
