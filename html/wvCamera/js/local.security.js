
var privateKey = 'mCamera.local.privateKey.pem';
var publicKey = 'mCamera.local.publicKey.pem';
var streamName = 'mCamera.local.stream';
var securityName = 'mCamera.local.security';
var infoName = 'mCamera.local.info';


var localPrivateKey = localStorage.getItem(privateKey);
var localPublicKey = localStorage.getItem(publicKey);
var localStream = localStorage.getItem(streamName);
var localSecurity = localStorage.getItem(securityName);
var localInformation = localStorage.getItem(infoName);


var remotePublicKey =  localStorage.getItem('mCamera.remote.publicKey.pem');
var remoteStream =   localStorage.getItem('mCamera.remote.stream');
var remoteSecurity =   localStorage.getItem('mCamera.remote.security');
var remoteInformation =  localStorage.getItem('mCamera.remote.info');




function createRSAKey() {
  var pkey = new RSAKey();
  pkey.generate(2048, '10001'); // generate 1024bit RSA private key with public exponent 'x010001'
  var pem = PKCS5PKEY.getEryptedPKCS5PEMFromRSAKey(pkey, "");
  localStorage.setItem(privateKey,pem);
  
  var pubkey_pem = KJUR.asn1.x509.X509Util.getPKCS8PubKeyPEMfromRSAKey(pkey);
  localStorage.setItem(publicKey,pubkey_pem);
}

if(null == localPrivateKey) {
	createRSAKey();
	localPrivateKey = localStorage.getItem(privateKey);
}

if(null == localPublicKey) {
	createRSAKey();
	localPublicKey = localStorage.getItem(publicKey);
}


function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};

function uuid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
}

if(null == localStream) {
	localStream = hex_sha1(uuid());
	localStorage.setItem(streamName,localStream);
}


if(null == localSecurity) {
	localSecurity = hex_sha1(uuid());
	localStorage.setItem(securityName,localSecurity);
}

if(null == localInformation) {
	localInformation = hex_sha1(uuid());
	localStorage.setItem(infoName,localInformation);
}
