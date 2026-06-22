// lesson 17
class BattleField {
    constructor(logger) {
        this.logger = logger;
    }
    fight(attacker, target) {
        let err = this.conditions(attacker, target);
        if(err) {
            console.log(err);
            return;
        }
        attacker.attack(target);
        this.logger.log(attacker, target);
    }
    conditions(attacker, target) {
        if (attacker === target) return "unable to attack yourself!";
        if (target.getHP() <= 0) return "target is already dead!";
        return null;
    }
}
class Logger {
    log(attacker, target) {
        if (attacker instanceof Mage) {
            console.log(`${attacker.name} magically attacked ${target.name}!`);
        } else if (attacker instanceof Character) {
            console.log(`${attacker.name} attacked ${target.name}!`);
        }
        console.log("Target's HP: " + target.getHP());
    }
}

class Character {
    #hp = 30;
    constructor(name) {
        this.name = name;
    }
    attack(target) {
        target.damage(10);
    }
    damage(dmg) {
        this.#hp -= dmg;
    }
    getHP() {
        return this.#hp;
    }
}
class Mage extends Character {
    attack(target) {
        target.damage(40);
    }
}
const logger = new Logger();
const battle = new BattleField(logger);
const Lanx = new Mage("Lanx");
const Rico = new Character("Rico");

battle.fight(Lanx, Rico);
battle.fight(Rico, Lanx);
// lesson end [17]
