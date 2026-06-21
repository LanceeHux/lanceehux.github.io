/// lesson 13
class Character {
    #hp = 100;
    constructor(name) {
        this.name = name;
    }
    damage(dmg) {
        this.#hp -= dmg;
        console.log(`${this.name} got damaged (${dmg})! HP: ${this.#hp}`);
    }
    heal(health) {
        this.#hp += health;
        console.log(`${this.name} got healed! HP: ${this.#hp}`);
    }
    show() {
        console.log( { name: this.name, hp: this.#hp } );
    }
}
class Mage extends Character {
    castSpell(dmg, target) {
        target.damage(dmg);
        console.log(`${this.name} casts a spell on ${target.name}!`);
    }
}
 function updateGame(x) {
    let action = x.action;
    x.char[action](x.value, x.target);
 }

const Lanx = new Character("Lanx");
const Rico = new Mage("Rico");

 updateGame( { char: Rico, action: "castSpell", target: Lanx, value: 30 } );
 updateGame( { char: Lanx, action: "heal", value: 10 } );
 updateGame({ char: Lanx, action: "show"});

// lesson end [13]
