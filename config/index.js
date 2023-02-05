const express = require('express');

const routes = require("./routes");
const config = require("./config");

const setUpViewEngine = require("./viewEngine");

const app = express();
setUpViewEngine(app);

app.use(express.static("public"));
app.use(express.urlencoded({extended: "false"}));
app.use(routes);

app.listen(config.PORT, () => console.log("Listening on port " + config.PORT + "..."));

