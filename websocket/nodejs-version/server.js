(function(){

    "use strict";

    var fs = require('fs');

    // you'll probably load configuration from config
    var cfg = {
        ssl: true,
        port: 8453,
        ssl_key: 'server.key',
        ssl_cert: 'server.crt'
    };

    var httpServ = ( cfg.ssl ) ? require('https') : require('http');

    var WebSocketServer   = require('ws').Server;

    var app      = null;

    // dummy request processing
    var processRequest = function( req, res ) {

        res.writeHead(200);
        res.end("All glory to WebSockets!\n");
    };

    if ( cfg.ssl ) {

        app = httpServ.createServer({

            // providing server with  SSL key/cert
            key: fs.readFileSync( cfg.ssl_key ),
            cert: fs.readFileSync( cfg.ssl_cert )

        }, processRequest ).listen( cfg.port );

    } else {

        app = httpServ.createServer( processRequest ).listen( cfg.port );
    }

    // passing or reference to web server so WS would knew port and SSL capabilities
    var wss = new WebSocketServer( { server: app } );
    var pairingInfo = [ ];
    var pairingSocket = [ ];

	function TimeoutHandler(password)
	{
//	  console.log(password);
	  delete pairingInfo[password];
	  delete pairingSocket[password];
//	  console.log(pairingInfo[password]);
//	  console.log(pairingSocket[password]);
	}
    
	wss.on( 'connection', function ( wsConnect ) {
        wsConnect.on( 'message', function ( message ) {
			var jsonMsg = JSON.parse( message );
//			console.log(jsonMsg);
			
			if( true == jsonMsg["share"]) {
				var password = jsonMsg["password"];
//				console.log(password);
				pairingInfo[password] = jsonMsg["pair"];
				pairingSocket[password] = wsConnect;
				setTimeout(TimeoutHandler, 29 * 1000,password);
			}
			if( true == jsonMsg["recieve"]) {
				var password = jsonMsg["password"];
				// send back to me your message.
				var shareMsg = JSON.stringify(pairingInfo[password]);
				if(shareMsg) {
					console.log('-----shareMsg start-----');
					console.log(shareMsg);
					console.log('-----shareMsg end-----');
					wsConnect.send(shareMsg);
				}
				// send mine message to you.
				var yourSocket = pairingSocket[password];
				if(yourSocket) {
					//console.log(yourSocket);
					var rcvMsg = JSON.stringify(jsonMsg["pair"]);
					console.log('-----rcvMsg start-----');
					console.log(rcvMsg);
					yourSocket.send(rcvMsg);
					console.log('-----rcvMsg end-----');
				}
			}
        });
    });

    wss.on( 'close', function ( wsConnect ) {
	});

}());
