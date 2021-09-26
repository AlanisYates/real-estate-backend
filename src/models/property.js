import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    nickName: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
