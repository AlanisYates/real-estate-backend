import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
