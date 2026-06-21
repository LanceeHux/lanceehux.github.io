
class BattleSystem {
    fight(attacker, target) {
        if (target === attacker) {
            console.log("invalid, can't attack yourself!");
            return;
        }
        attacker.attack(target);
    }
}

// lesson 15
class Character {
    #hp = 100;

    constructor(name) {
        this.name = name;
    }
    damage(dmg) {
        this.#hp -= dmg;
        console.log(`${this.name} received a ${dmg} damage! remaining HP: ${this.#hp}`);
    }
}
class Mage extends Character {
    attack(target, dmg) {
        dmg = dmg ?? 10;
        console.log(`${this.name} cast a ${dmg} magic spell damage to ${target.name}!`);
        target.damage(dmg);
        console.log("battle ended");
    }
}
class Warrior extends Character {
    attack(target, dmg) {
        dmg = dmg ?? 10;
        console.log(`${this.name} swung their sword on ${target.name}, and cast a ${dmg} damage!`);
        target.damage(dmg);
        console.log("battle ended");
    }
}
const battle = new BattleSystem();
const Lanx = new Mage("Lanx");
const Rico = new Warrior("Rico");
battle.fight(Lanx, Rico);
battle.fight(Rico, Rico);
// lesson end [15]
