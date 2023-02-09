const express = require("express");

const Routes = require("./routes/index.js");

const app = express();

app.use("/api", Routes);
app.listen(5000);
