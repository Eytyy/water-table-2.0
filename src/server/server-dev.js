import path from 'path';
import express from "express";
import socket from "socket.io";
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config';
import historyApiFallback from 'connect-history-api-fallback';

const app = express();
const DIST_DIR = __dirname;
const server = require('http').createServer(app);
const io = socket(server);
// const compiler = webpack(config);

// app.use(historyApiFallback({ verbose: false }));

// app.use(webpackDevMiddleware(compiler, {
// 	publicPath: config.output.publicPath
// }));

// app.use(webpackHotMiddleware(compiler))

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

function controllerTemplate({
	title = "Water Table Jordan | Controller",
	ogURL = "http://www.watertablejordan.com",
}) {
	return `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
			<title>${title}</title>
			<meta property="og:title" content="${title}" />
			<meta property="og:url" content="${ogURL}" />
			<link rel="stylesheet" href="/controller.css"/>
		</head>
		<body>
			<div id="controller"></div>
			<script src="/controller.js"></script>
		</body>
		</html>
	`;
}
function template({
	title = "Water Table Jordan",
	ogURL = "http://www.watertablejordan.com",
}) {
	return `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
			<title>${title}</title>
			<meta property="og:title" content="${title}" />
			<meta property="og:url" content="${ogURL}" />
			<link rel="stylesheet" href="/table.css"/>
		</head>
		<body>
			<div id="table"></div>
			<script src="/table.js"></script>
		</body>
		</html>
	`;
}
