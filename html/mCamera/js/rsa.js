var key = new RSAKey();
console.log(key);
var rsa = function(){
	var storage = localStorage;
	this.privateKey = function(){
		if(nil == storage.mCameraPrivateKey) {
			var pem = PKCS5PKEY.newEncryptedPKCS5PEM("password", 2048, '3');
            console.log(pem);			
		}
		console.log(i); 
	};
};
