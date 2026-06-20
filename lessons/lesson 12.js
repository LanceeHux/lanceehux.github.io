// lesson 12
class Weapon {
    constructor(weaponName, damage) {
        this.name = weaponName;
        this.dmg = damage;
    }
    attack(player, target) {
        console.log(`${player.name} shot ${target.name}!`);
        target.damage(this.dmg);
    }
}
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.hp = 100;
        this.weapon = weapon;
    }
    damage(dmg) {
        this.hp -= dmg;
        console.log(`${this.name} got shot! hp: ${this.hp}`);
    } 
}
// weapons built for class Weapon
const shotgun = new Weapon("Shotgun", 30);
const pistol = new Weapon("Pistol", 10);
// players n targets
const Lanx = new Character("Lanx", shotgun);
const Rico = new Character("Rico");

function gameUpdate(x) {
   let action = x.action;
   x.weapon[action](x.player, x.target);
}
gameUpdate({ weapon: Lanx.weapon, action: "attack", player: Lanx, target: Rico });

// lesson end [12]
