const system = {
    turn: 0,
    players: [
        { name: "Lanx", hp: 100},
        { name: "Rico", hp: 100}
    ]
}
const types = {
    ATTACK: applyDamage,
    NEXT_TURN: changeTurn,
    LOG_STATE: logObjects
}

function applyDamage(game, action) {
    let error = conditions(game, action);
    if (error) {
        console.log(error);
        return;
    }

    game.players[action.target].hp -= action.dmg;
    console.log(`${game.players[action.player].name} attacks ${game.players[action.target].name}!`);
    console.log(`${game.players[action.target].name}'s remaining HP: ${game.players[action.target].hp}`);
}
function changeTurn(game) {
    game.turn = (game.turn + 1) % game.players.length;
}
function logObjects(game) {
    console.log(`-----------`);
    console.log(game);
    console.log(`-----------`);
}

function conditions(game, action) {
    if (action.dmg <= 0) return "invalid damage!";
    if (game.turn !== action.player) return "not your turn yet!";
    if (game.players[action.target].hp <= 0) return "Target is already dead!";
    return null; 
}

function gameUpdate(game, action) {
    const handler = types[action.type];
    if (!handler) {
        console.log("action doesn't exist!");
        return;
    }
    handler(game, action);
}
gameUpdate(system, { type: "ATTACK", player: 0, target: 1, dmg: 30 });
gameUpdate(system, { type: "NEXT_TURN" });
gameUpdate(system, { type: "ATTACK", player: 1, target: 0, dmg: 30 });
gameUpdate(system, { type: "LOG_STATE" });
