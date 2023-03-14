// requiring all the necessities to run the application such as express, routes, etc.
const PORT = 3001;
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const htmlRoutes = require("./routes/htmlRoutes/html");
const apiRoutes = require("./routes/apiRoutes/api");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
