var privateKey = 'mCamera.PrivateKey.pem';
var publicKey = 'mCamera.PublicKey.pem';
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
