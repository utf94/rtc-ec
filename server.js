// Load required modules
var https   = require("https");     // https server core module
var http    = require("http");              // http server core module
var fs      = require("fs");
var express = require("express");           // web framework external module
var io      = require("socket.io");         // web socket external module
var easyrtc = require("easyrtc");           // EasyRTC external module

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var httpApp = express();
httpApp.use(express.static(__dirname + "/static/"));

// Start Express http server on port 8080
var options = {pfx: fs.readFileSync("localselfsigned.pfx"), passphrase: "123456"};
var webServer = https.createServer(options,httpApp).listen(443);

// Start Socket.io so it attaches itself to Express server
var socketServer = io.listen(webServer, {"log level":1});

// Start EasyRTC server
var rtc = easyrtc.listen(
        httpApp,
        socketServer,
        {
			logDateEnable:true,
			demosEnable : false,
			appAutoCreateEnable: true,
			roomDefaultEnable: false,
			roomNameRegExp: /.{20,128}/
		},
        function(err, rtc) {
            // Creates a new application called MyApp with a default room named "SectorOne".
            rtc.createApp(
                "EduCoders_Dep"
            );
        }
);



