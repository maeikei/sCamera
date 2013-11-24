var http = require('https');
var sockjs = require('sockjs');
var fs = require("fs");

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

var mCamera = sockjs.createServer();
mCamera.on('connection', function(conn) {
    conn.on('data', function(message) {
        conn.write(message);
    });
    conn.on('close', function() {});
});

var server = http.createServer(options);
//mCamera.installHandlers(server, {prefix:'/echo'});
server.listen(8453, '0.0.0.0');
