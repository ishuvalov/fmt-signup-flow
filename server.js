import express from "express";
import path from "path";
import bodyParser from "body-parser";
import api from "./api.js";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API
app.use("/api", api);

// Static
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Global error handler
app.use((err, req, res, next) => {
  console.log("err: ", err);
  res.status(500).send(err.stack);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
