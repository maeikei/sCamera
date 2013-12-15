var pairWSS = new WebSocket('wss://' + location.hostname + '/mCameraWss');
// When the connection is open, send some data to the server
// Log errors
pairWSS.onerror = function (error) {
  console.error(error);
};
// Log messages from the server
pairWSS.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
