const express = require("express");
const connection = require("./src/databases/database");
const app = express();
connection;
app.use(express.json());
const employeerouter = require("./src/route/route");
app.use("/", employeerouter);
app.listen(7000, () => {
    console.log("server run on port 7000")
})