import bcrypt from "bcrypt";
import Teacher from "../model/Teacher.js";

const createTeacher = async (req, res) => {
  const { name, email, password } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const teacher = new Teacher({
    name,
    email,
    passwordHash,
  });

  const savedTeacher = await teacher.save();
  res.status(201).json(savedTeacher);
};

export default {
  createTeacher,
};
