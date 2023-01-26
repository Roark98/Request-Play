const express = require("express");
const morgan = require('morgan');
const lugarRouter = require("./routes/lugares.routes.js");
const userRouter = require("./routes/users.routes");

const app = express();
app.use(morgan('combined'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas generales
app.use("/api/lugares/", lugarRouter);
app.use("/api/users/", userRouter);

const server = app.listen(3000);

console.log("Working on port 3000");

module.exports = {app, server};