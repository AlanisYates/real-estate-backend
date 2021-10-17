import express from "express";
import * as Users from "../controllers/users.controller";

const router = express.Router();

// Get all Users
router.get("/", (req, res, next) => {
  res.send("All Users");
});

// get single User
router.get("/:id", (req, res, next) => {
  res.send("Get User with id");
});

// create User
router.post("/register", async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password, email } = req.body;
    const createdUser = await Users.createUser(username, email, password);

    res.send(createdUser);
  } catch (e) {
    next(e);
  }
});

// update User
router.patch("/:id", (req, res, next) => {
  res.send("Update User with Id");
});

// delete User
router.delete("/:id", (req, res, next) => {
  res.send("Delete User with id");
});

module.exports = router;
