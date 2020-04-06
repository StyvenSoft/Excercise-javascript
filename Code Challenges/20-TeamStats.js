const team = {
    _players : [{
      firstName : 'Pablo',
      lastName : 'Sanchez',
      age : 11
    }],
    _games : [{
      opponent : 'Broncos',
      teamPoints : 42,
      opponentPoints : 27
    }],
    get players() {
        return this._players;
      },
    get games() {
        return this._games;
    }
  }
  