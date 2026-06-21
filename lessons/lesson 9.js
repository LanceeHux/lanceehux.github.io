// lesson 9
const system = {
    turn: 0,
    players: [
        { 
            name: "Lanx", 
            hp: 100,

            damage(dmg) {
                this.hp -= dmg;
                console.log(`${this.name} received damage! remaining HP: ${this.hp}
                `);
            },
            heal(heal) {
                this.hp += heal;
                console.log(`${this.name} received a heal of ${heal}. HP: ${this.hp}`);
            },
            show() {
                console.log(this);
            }
        }
    ]
}
function gameUpdate(i, x) {
    let action = x.type;
    let game = i.players[x.player];
    let handler = game[action];
    if (!handler) {
        console.log("error");
        return;
    }
   // handler.call(game, x.value);
   game[action](x.value);
}

gameUpdate(system, {type: "damage", player: 0, value: 30});
gameUpdate(system, {type: "heal", player: 0, value: 10 });
gameUpdate(system, {type: "show", player: 0})
// lesson end [9]
