import express from "express";
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
router.post("/", (req, res, next) => {
  res.send("Create User");
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
