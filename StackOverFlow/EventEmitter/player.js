const EventEmitter = require('events').EventEmitter;

class rocketPlayer extends EventEmitter {
  constructor(options) {
    super(options);
  }

  update(connection) {
    //do some logic with playlists
    this.play(connection);
  }

  play(connection) {
    // do some stuff
    this.emit('nowPlaying',song.title);
  }
}

module.exports = rocketPlayer