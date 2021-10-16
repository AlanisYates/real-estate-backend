import express from "express";
const router = express.Router();

// Get all properties
router.get("/", (req, res, next) => {
  res.send("All properties");
});

// get single property
router.get("/:id", (req, res, next) => {
  res.send("Get property with id");
});

// create property
router.post("/", (req, res, next) => {
  res.send("Create Property");
});

// update property
router.patch("/:id", (req, res, next) => {
  res.send("Update Property with Id");
});

// delete property
router.delete("/:id", (req, res, next) => {
  res.send("Delete Property with id");
});

module.exports = router;
