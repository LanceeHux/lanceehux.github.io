// lesson 14
class Character {
    #hp = 100;
    constructor(name) {
        this.name = name;
    }
    attack(target) {
         let dmg = 10;
         console.log(`${this.name} attacks ${target.name}, with a ${dmg} damage!`);
         target.damage(dmg);
    } 
    damage(dmg) {
        this.#hp -= dmg;
        console.log(`${this.name} received a ${dmg} damage! HP: ${this.#hp}`);
    }
    show () {
        console.log( { name: this.name, hp: this.#hp } );
    }
}
class Mage extends Character {
    attack(target) {
        let dmg = 40;
        console.log(`${this.name} casts a ${dmg} damage spell to ${target.name}! `);
        target.damage(dmg);
    }
}
class Warrior extends Character {
    attack(target) {
        let dmg = 20;
        console.log(`${this.name} swing their sword on ${target.name}, and casted a ${dmg} damage!`);
        target.damage(dmg);
    }
}

const Lanx = new Mage("Lanx");
const Rico = new Warrior("Rico");
const Ana = new Character("Ana");

function gameUpdate(x) {
    let action = x.action;
    x.char[action](x.target, x.value);
}
gameUpdate( { char: Lanx, action: "attack", target: Ana } );
gameUpdate( { char: Rico, action: "attack", target: Ana } );
gameUpdate( { char: Ana, action: "attack", target: Lanx } );
gameUpdate( { char: Lanx, action: "show" } );
gameUpdate( { char: Rico, action: "show" } );
gameUpdate( { char: Ana, action: "show" } );
// lesson end [14]
