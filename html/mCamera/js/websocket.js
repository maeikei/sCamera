var messageServer = new WebSocket('wss://' + location.hostname + '/mCameraWss');
// When the connection is open, send some data to the server
var msgSrvOpenFlag = false;
messageServer.onopen = function () {
	msgSrvOpenFlag = true;
};
// Log errors
messageServer.onerror = function (error) {
  console.error(error);
};
// Log messages from the server
messageServer.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
