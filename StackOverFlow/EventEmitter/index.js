const rocketPlayer = require('./player.js');
const player = new rocketPlayer();

player.on('nowPlaying', title => {
  console.log('caught nowPlaying event');
})

//define a connection
player.update(connection)