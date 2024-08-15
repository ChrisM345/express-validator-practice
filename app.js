const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const path = require("node:path");
const usersRouter = require("./routes/usersRouter");
const { body, validationResult } = require("express-validator");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
