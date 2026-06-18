// lesson 4
const game = {
    turn: 1,
    players: [
        {name: "Macx", hp: 100},
        {name: "Rico", hp: 100},
        {name: "Ana", hp: 100}
    ]
}
function begin() {
    game.turn = 2;
    game.players[1].hp -= 30;
    console.log(game);
}
begin();
// lesson end [4]
