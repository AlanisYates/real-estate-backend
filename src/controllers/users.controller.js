import User from "../models/user";
import bcrypt from "bcrypt";

export async function createUser(username, email, plainTextPass) {
  try {
    const password = await bcrypt.hash(plainTextPass, 12);

    // add use to DB
    return await User.create({ username, email, password });
  } catch (e) {
    throw e;
  }
}
