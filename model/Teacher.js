import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const teacherSchema = new mongoose.Schema({
  username: String,
  email: String,
  passwordHash: String,
});

teacherSchema.plugin(mongooseUniqueValidator);

teacherSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
