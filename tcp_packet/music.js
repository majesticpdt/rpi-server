var player = require('play-sound')(opts = {})

 player.play('sample.mp3', function (err) {
   if (err) throw err;
   console.log("Audio finished");
 });
