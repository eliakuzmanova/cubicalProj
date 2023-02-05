const express = require('express');

const routes = require("./routes");
const config = require("./config");

const setUpViewEngine = require("./viewEngine");
const initDatabase = require("./database");

const app = express();
setUpViewEngine(app);

app.use(express.static("public"));
app.use(express.urlencoded({extended: "false"}));
app.use(routes);

initDatabase()
.then(app.listen(3000, () => console.log("Listening on port " + 3000 + "...")))
.catch((err) => console.error(err));


