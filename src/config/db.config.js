import mongoose from "mongoose";

const InitateMongoServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitateMongoServer;
