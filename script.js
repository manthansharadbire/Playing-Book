const players = [
    "Kumar Sangakara",
    "Hashim Amla",
    "Shane Watson",
    "Jaques Kallis",
    "Ricky Ponting",
    "Yuvraj Singh",
    "Brendon McCullum"
]
function loadPlayers(){
const playersContainer = document.getElementById('players-container');
playersContainer.innerHTML = "";

for(let i=0; i<players.length; i++){
    playersContainer.innerHTML += `<div class='player-card'>${i+1}) ${players[i]}</div>`
}
}
loadPlayers()

const playerInput = document.getElementById('input-name');
function addPlayer(){
    players.push(playerInput.value);
    playerInput.value = "";
    loadPlayers();
}

function removePlayer(){
    const playerIndex = players.indexOf(playerInput.value);
    players.splice(playerIndex, 1);
    playerInput.value = "";
    loadPlayers();
}