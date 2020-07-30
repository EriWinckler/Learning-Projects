const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanches',
            age: 11
        },
        {
            firstName: 'Joao',
            lastName: 'Marinho',
            age: 13
        },
        {
            firstName: 'Pezado',
            lastName: 'Rodrigo',
            age: 14
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Rednecks',
            teamPoints: 24,
            opponentPoints: 10
        },
        {
            opponent: 'Rusher',
            teamPoints: 55,
            opponentPoints: 120
        }
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age
        };
        this.players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoits) {
        let game = {
            opponent,
            teamPoints,
            opponentPoits
        }
        this.games.push(game);
    },
}

team.addPlayer('Steph', "Curry", 28);
team.addPlayer('Lisa', "Leslie", 44);
team.addPlayer('Bugs', "Bunny", 76);


team.addGame('Revolution', 34, 20);
team.addGame('Nose', 44, 50);
team.addGame('Real', 41, 40);
console.log(team)