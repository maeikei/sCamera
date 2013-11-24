var messageServer = new WebSocket('wss://' + location.hostname + ':8453');
// When the connection is open, send some data to the server
messageServer.onopen = function () {
};
// Log errors
messageServer.onerror = function (error) {
  console.error(error);
};
// Log messages from the server
messageServer.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
