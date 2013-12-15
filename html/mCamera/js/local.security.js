var privateKey = 'mCamera.PrivateKey.pem';
var publicKey = 'mCamera.PublicKey.pem';
var streamName = 'mCamera.id.stream';
var securityName = 'mCamera.id.security';
var infoName = 'mCamera.id.info';

var privatePEM = localStorage.getItem(privateKey);

var publicPEM = localStorage.getItem(publicKey);
var streamID = localStorage.getItem(streamName);
var securityID = localStorage.getItem(securityName);
var infoID = localStorage.getItem(infoName);


function createRSAKey() {
  var pkey = new RSAKey();
  pkey.generate(2048, '10001'); // generate 1024bit RSA private key with public exponent 'x010001'
  var pem = PKCS5PKEY.getEryptedPKCS5PEMFromRSAKey(pkey, "");
  localStorage.setItem(privateKey,pem);
  
  var pubkey_pem = KJUR.asn1.x509.X509Util.getPKCS8PubKeyPEMfromRSAKey(pkey);
  localStorage.setItem(publicKey,pubkey_pem);
}

if(null == privatePEM) {
	createRSAKey();
	privatePEM = localStorage.getItem(privateKey);
}
console.log(privatePEM);

if(null == publicPEM) {
	createRSAKey();
	publicPEM = localStorage.getItem(publicKey);
}
console.log(publicPEM);


function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};

function uuid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
}

if(null == streamID) {
	streamID = hex_sha1(uuid());
	localStorage.setItem(streamName,streamID);
}


if(null == securityID) {
	securityID = hex_sha1(uuid());
	localStorage.setItem(securityName,securityID);
}

if(null == infoID) {
	infoID = hex_sha1(uuid());
	localStorage.setItem(infoName,infoID);
}
