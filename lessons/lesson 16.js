// lesson 16
lesson 16(redefined)
class BattleField {
  fight(attacker, target) {
    if (target === attacker) {
      console.log("cant attack yourself!");
      return;
    }
    attacker.attack(target);
    this.log(attacker, target);
  }
  log(attacker, target) {
  console.log(`${attacker.name} attacked ${target.name}`);
  console.log("Remaining HP: " + target.getHP());
}
}
class Character {
  #hp = 100;
  constructor(name) {
    this.name = name;
  }
  attack(target) {
   return target.damage(10);
  }
  damage(dmg) {
    this.#hp -= dmg;
    return this.#hp;
  }
  getHP() {
    return this.#hp;
  }
}
class Mage extends Character {
  attack(target) {
    return target.damage(40);
  }
 }
 
 const battle = new BattleField();
 const Lanx = new Mage("Lanx");
 const Rico = new Character("Rico");
 
 battle.fight(Lanx, Rico);
 battle.fight(Rico, Lanx);

// lesson end [16]
