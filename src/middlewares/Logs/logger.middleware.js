const expressWinston = require("express-winston");
const { transports, format } = require("winston");

const loggerMiddleware = expressWinston.logger({
  transports: [
    //log to file
    new transports.File({
      json: true,
      colorize: true,
      level: "warn",
      filename: "logs.log",
    }),
  ],
  format: format.combine(
    format.colorize(),
    format.json(),
    format.prettyPrint()
  ),
  msg: "HTTP {{req.method}} {{req.url}} ",
  statusLevels: true,
});

module.exports = { loggerMiddleware };
