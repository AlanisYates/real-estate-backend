const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.statusCode && err.message) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }

  res.status(500).json("something went wrong");
};

module.exports = errorHandler;
