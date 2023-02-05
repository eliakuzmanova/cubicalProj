const express = require('express');

const routes = require("./routes");
const config = require("./config");

const setUpViewEngine = require("./viewEngine");
const initDatabase = require("./initDatabase");

const app = express();
setUpViewEngine(app);

app.use(express.static("public"));
app.use(express.urlencoded({extended: "false"}));
app.use(routes);

initDatabase()
.then(app.listen(config.PORT, () => console.log("Listening on port " + config.PORT + "...")))
.catch((err) => console.error(err));


