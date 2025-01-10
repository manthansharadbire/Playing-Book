const players = [
    "Kumar Sangakara",
    "Hashim Amla",
    "Shane Watson",
    "Jaques Kallis",
    "Ricky Ponting",
    "Yuvraj Singh",
    "Brendon McCullum"
]

const playersContainer = document.getElementById('players-container');

for(let i=0; i<players.length; i++){
    playersContainer.innerHTML += `<div class='player-card'>${i+1}) ${players[i]}</div>`
}