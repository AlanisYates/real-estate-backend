import express from "express";
import morgan from "morgan";
import "dotenv/config";
import bodyParser from "body-parser";

const app = express();

app.use(morgan("combined"));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/property", (req, res, next) => {
  res.send({ message: "Property Route" });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
