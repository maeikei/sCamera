var privateKey = 'mCamera.PrivateKey.pem';
var publicKey = 'mCamera.PublicKey.pem';
var videoName = 'mCamera.id.video';
var securityName = 'mCamera.id.security';
var infoName = 'mCamera.id.info';


function createRSAKey() {
  var pkey = new RSAKey();
  pkey.generate(2048, '10001'); // generate 1024bit RSA private key with public exponent 'x010001'
  var pem = PKCS5PKEY.getEryptedPKCS5PEMFromRSAKey(pkey, "");
  localStorage.setItem(privateKey,pem);
  
  var pubkey_pem = KJUR.asn1.x509.X509Util.getPKCS8PubKeyPEMfromRSAKey(pkey);
  localStorage.setItem(publicKey,pubkey_pem);
}

var privatePEM = localStorage.getItem(privateKey);
if(null == privatePEM) {
	createRSAKey();
	privatePEM = localStorage.getItem(privateKey);
}
console.log(privatePEM);

var publicPEM = localStorage.getItem(publicKey);
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

var videoID = localStorage.getItem(videoName);
if(null == videoID) {
	videoID = hex_sha1(uuid());
	localStorage.setItem(videoName,videoID);
}


var securityID = localStorage.getItem(securityName);
if(null == securityID) {
	securityID = hex_sha1(uuid());
	localStorage.setItem(securityName,securityID);
}

var infoID = localStorage.getItem(infoName);
if(null == infoID) {
	infoID = hex_sha1(uuid());
	localStorage.setItem(infoName,infoID);
}
