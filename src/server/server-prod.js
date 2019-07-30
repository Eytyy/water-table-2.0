import express from 'express';
import socket from "socket.io";

const app = express();
const DIST_DIR = __dirname;
const server = require('http').createServer(app);
const io = socket(server);

app.use(express.static(DIST_DIR));

io.on('connection', function(client) {  
	client.on('join', function(data) {
		console.log(data);
	});

	// controller
	client.on('controller', function(data) {
		client.broadcast.emit('controller', data);
	});

	client.on('from-table', function(data) {
		client.broadcast.emit('from-table', data);
	});

});

app.get( "/", ( req, res ) => {
	res.send(templateLanding({
		title: 'Water Table Jordan',
	}));
});

app.get( "/table/:section?", ( req, res, ext ) => {
	res.send(template({
		title: 'Water Table Jordan',
	}));
});

app.get( "/controller/:section?", ( req, res ) => {
	res.send(controllerTemplate({
		title: 'Water Table Jordan',
	}));
});


const PORT = process.env.PORT || 8080;
server.listen( PORT );
