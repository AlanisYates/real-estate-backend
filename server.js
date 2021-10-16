import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import PropertyRouter from "./src/routes/properties";
import UserRouter from "./src/routes/users";

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

// Mongo Db Connection

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Property Routes
app.use("/property", PropertyRouter);

// User Routes
app.use("/users", UserRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
