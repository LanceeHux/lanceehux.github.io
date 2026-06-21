// lesson 6-7
const system = {
    turn: 0,
    players: [
        { name: "Lanx", hp: 100},
        { name: "Rico", hp: 100}
    ]
}

function gameUpdate(game, action) {
    let error = conditions(game, action);
    if(error) {
        console.log(error);
    } else if(action.type === "NEXT_TURN") {
        changeTurn(game);
    } else  {
        applyDamage(game, action);
        changeTurn(game);
    }
}
    
function conditions(game, action) {
    if (game.turn !== action.player) return `Not your turn yet, ${game.players[action.player].name}!`;
    if (action.dmg <= 0) return `invalid damage!`;
    if (game.players[action.target].hp <= 0) return `player ${game.players[action.target].name} is already dead!`;
     return null;
}


function applyDamage(game, action) {
    game.players[action.target].hp -= action.dmg;
    console.log (`${game.players[action.player].name} attacked ${game.players[action.target].name}!`);
    console.log (`${game.players[action.target].name}'s HP: ${game.players[action.target].hp}`);
}

function changeTurn(game) {
    game.turn = (game.turn + 1) % game.players.length; // 2 players listed as of now
}

gameUpdate(system, { type: "ATTACK", player: 0, target: 1, dmg: 30 });
gameUpdate(system, { type: "ATTACK", player: 1, target: 0, dmg: 30 });

// lesson end [6-7]
