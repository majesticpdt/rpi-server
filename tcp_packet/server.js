var llng = 0;
var net = require('net');
// Configuration parameters
var HOST = '192.168.0.189';
var PORT = 1234;
 
// Create Server instance 
var server = net.createServer(onClientConnected);  
 
server.listen(PORT, HOST, function() {  
  console.log('server listening on %j', server.address());
});
 
function onClientConnected(sock) {  
  var remoteAddress = sock.remoteAddress + ':' + sock.remotePort;
  console.log('new client connected: %s', remoteAddress);
 
  sock.on('data', function(data) {
	      console.log('%s Says: %s', remoteAddress, data);
    
	
	
    sock.write(' exit');
  });
  sock.on('close',  function () {
    console.log('connection from %s closed', remoteAddress);
  });
  sock.on('error', function (err) {
    console.log('Connection %s error: %s', remoteAddress, err.message);
  });
  console.log('Connection %s', sock.data);
};



 function initMap() {
	 lat=0;
	 lng=0;
	 console.log('inside');
     var myLatLng = {lat, lng};
	
     var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
		  icon: 'rsz_dog.png',
          map: map,
          title: 'Dog!'
        });
      }
