var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// might be needed, improvised
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// CORS
if (process.env.NODE_ENV === "development") {
  var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;