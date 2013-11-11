var messageServer = new WebSocket('wss://', ['soap', 'xmpp']);
// When the connection is open, send some data to the server
messageServer.onopen = function () {
  messageServer.send('Ping'); // Send the message 'Ping' to the server
};
// Log errors
messageServer.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};
// Log messages from the server
messageServer.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
