import bcrypt from "bcrypt";
import Teacher from "../model/Teacher.js";

const createTeacher = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const teacherExists = await Teacher.findOne({ username, email });
    if (teacherExists) {
      return res.status(400).json({ error: "Teacher already exists" });
    }

    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing information" });
    }

    const teacher = new Teacher({
      username,
      email,
      passwordHash,
    });

    const savedTeacher = await teacher.save();
    res.status(201).json(savedTeacher);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getAllTeachers = async (req, res) => {
  const teachers = await Teacher.find({});
  res.status(200).json(teachers);
};
export default {
  createTeacher,
  getAllTeachers,
};
