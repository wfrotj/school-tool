import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const teacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,
  passwordHash: String,
});

teacherSchema.plugin(mongooseUniqueValidator);

teacherSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});
const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
