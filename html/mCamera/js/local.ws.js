var localWS = new WebSocket('ws://127.0.0.1:30200');
// When the connection is open, send some data to the server
var localWSOpenFlag = false;
localWS.onopen = function () {
};
// Log errors
localWS.onerror = function (error) {
  console.error(error);
};
// Log messages from the server
localWS.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
