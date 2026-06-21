// lesson 2
let Player = {
    name: "Lanx",
    health: 100
}
function attack(user) {
    user.health -= 20;
    console.log(`${user.name} got attacked! health: ${user.health}`);
}
for(let i = 0;i < 3;i++) {
  attack(Player);
}
// lesson end [2]
