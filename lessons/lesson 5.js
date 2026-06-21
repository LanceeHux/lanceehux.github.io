// lesson 5
const game = {
    turn: 0,
    players: [
        {name: "lanx", hp: 100},
        {name: "rico", hp: 100}
    ]
}

function gameUpdate(game, action) {
    if(action.type === "ATTACK") {
        if(game.turn === action.player && game.players[action.target].hp > 30) {
            game.players[action.target].hp -= action.dmg;

            console.log(`${game.players[action.player].name} attacks ${game.players[action.target].name}! hp: ${game.players[action.target].hp}`);
        
        } else if (game.turn !== action.player) {
            console.log("Not your turn yet!");
        } else if (game.players[action.target].hp <= 30) {
            console.log("unable to be attacked this player, already");
        }
    } else if (action.type === "NEXT_TURN") {
        if(game.turn === 0) {
            game.turn = 1;
        } else if(game.turn === 1) {
            game.turn = 0;
        }
    }
}

gameUpdate(game, { type: "ATTACK", player: 0, target: 1, dmg: 30 });
gameUpdate(game, { type: "NEXT_TURN"}); // turns 1
gameUpdate(game, { type: "ATTACK", player: 1, target: 0, dmg: 10 });
gameUpdate(game, { type: "NEXT_TURN"});
gameUpdate(game, { type: "ATTACK", player: 0, target: 1, dmg: -5 });

// lesson end [5]
