// lesson 1
const player = {
    name: "Lanx",
    level: 3,
    inventory: ["Sword", "Potion"]
}
// Display the prompt popup and store the user's text in a variable
function game() {
    player.level += 2;
    player.inventory.push("Shield");

    console.log(JSON.stringify(player));
}

game();
//lesson end [1]
