//lesson 11
class Character {
  constructor(name) {
    this.name = name;
    this.hp = 100;
  }
  damage(dmg) {
    this.hp -= dmg;
    console.log(`${this.name} was attacked! remaining hp: ${this.hp}`);
  }
  heal(health) {
    this.hp += health;
    console.log(`${this.name} was healed! HP: ${this.hp}`);
  }
  show() {
    console.log(this);
  }
}
class Mage extends Character {
  castSpell(target, dmg) {
    console.log(`${this.name} casted ${dmg} magic damagic damage to ${target.name}!`);
    target.damage(dmg);
  }
}

const Lanx = new Mage("Lanx");
const Rico = new Character("Rico");

function gameUpdate(x) {
  let action = x.action;
  x.char[action](x.target, x.value);
}
gameUpdate({ char: Lanx, action: "castSpell", target: Rico, value: 40});

// lesson end [11]
