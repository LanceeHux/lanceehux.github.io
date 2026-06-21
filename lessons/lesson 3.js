// lesson 3
const players = [
    {name: "Lanx", hp: 100},
    {name: "Rico", hp: 100},
    {name: "Ana", hp: 100}
];

function attackAll(user) {
    for(let i = 0; i < user.length;i++) {
        user[i].hp -= 10;
        console.log(`${user[i].name} ${user[i].hp}`);
    }
}
attackAll(players);
// lesson end [3]
