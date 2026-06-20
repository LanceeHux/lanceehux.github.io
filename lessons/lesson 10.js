// lesson 10
class Character {
  constructor(name) {
    this.name = name;
    this.hp = 100;
  }
  damage(dmg) {
    this.hp -= dmg;
    console.log(`${this.name} received damage of ${dmg}. remaining hp: ${this.hp}`);
  }
  heal(health) {
    this.hp += health;
    console.log(`${this.name} got ${health} heal!`);
  }
  show() {
    console.log(this);
  }
}
const Lanx = new Character("Lanx");
const Rico = new Character("Rico");

  
function gameUpdate(x) {
  
  let data = x.char;
  if(!data) {
    console.log(`Character ${data} doesnt exist!`);
    return;
  }
  data[x.action](x.value);
 // Lanx.damage.call(x, 30)
}
gameUpdate({char: Lanx, action: "damage", value: 20});
gameUpdate({char: Rico, action: "heal", value: 50});
gameUpdate({char: Lanx, action: "show"});
gameUpdate({char: Rico, action: "show"});
// lesson end [10]