/* eslint-disable linebreak-style */
import express from "express";
import path from "path";
import https from "https";
import createError from "http-errors";
import fs from "fs";
import bodyParser from "body-parser";
import helmet from "helmet";
import { AllHtmlEntities } from "html-entities";
import compression from "compression";
import dotenv from "dotenv";
import Promise from "bluebird";
import LogManager from "./log/LogManager";

dotenv.config();

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet()); //防护包含点击劫持、xss、嗅探攻击...
app.use(compression());

app.get("/", (req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(
		"<a href='https://localhost:3050/vehicle/2016%20ACURA%20MDX%20TECH/TX/19910301'>click me</a>"
	);
});

app.get("/vehicle/:ymm/:state/:date", (req, res) => {
	const entities = new AllHtmlEntities();
	const ymm = encodeURIComponent(req.params.ymm).toUpperCase();
	const formattedYMM = entities.encode(
		ymm.replace(/%2F/g, "&#47;").replace(".", "%26%2347%3B")
	);

	var getData = function(filepath) {
		filepath = __dirname + "/" + filepath;
		return new Promise((resolve, reject) => {
			fs.readFile(filepath, "utf-8", function(err, data) {
				if (err) {
					reject(err);
				} else {
					resolve(data.trim());
				}
			});
		});
	};

	getData("sampleFile").then(data => {
		res.end(
			"Formatted YMM: " +
        formattedYMM +
        "\nOriginal YMM: " +
        req.params.ymm +
        "\nState: " +
        req.params.state +
        "\nDate: " +
        req.params.date +
        "\nData: " +
        data
		);
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.send("error: " + err.message);
});

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || "3050"); // eslint-disable-line no-undef
app.set("port", port);

/**
 * Create HTTPS server.
 */
const options = {
	key: fs.readFileSync(path.resolve(__dirname, "tls/server-key.pem")),
	cert: fs.readFileSync(path.resolve(__dirname, "tls/server-cert.pem")),
	rejectUnauthorized: true
};
var server = https.createServer(options, app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
	case "EACCES":
		LogManager.getConsole().error(bind + " requires elevated privileges");
		process.exit(1); // eslint-disable-line no-undef
		break;
	case "EADDRINUSE":
		LogManager.getConsole().error(bind + " is already in use");
		process.exit(1); // eslint-disable-line no-undef
		break;
	default:
		throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	LogManager.getConsole().info("Listening on " + bind);
}
