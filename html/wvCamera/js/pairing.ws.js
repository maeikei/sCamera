var pairWSS = new WebSocket('wss://' + location.hostname + '/wvCameraWss');
// When the connection is open, send some data to the server
// Log errors
pairWSS.onerror = function (error) {
  console.error(error);
};
// Log messages from the server
pairWSS.onmessage = function (evt) {
  var remoteMsg = JSON.parse( evt.data );
  console.log(remoteMsg);
  localStorage.setItem('mCamera.remote.publicKey.pem',remoteMsg['shareKey']);
  localStorage.setItem('mCamera.remote.stream',remoteMsg['stream']);
  localStorage.setItem('mCamera.remote.security',remoteMsg['security']);
  localStorage.setItem('mCamera.remote.info',remoteMsg['info']);
};
