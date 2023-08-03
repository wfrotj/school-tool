import Teacher from "../model/Teacher.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../utils/config.js";

const login = async (req, res) => {
  const { username, password } = req.body;
  const teacher = await Teacher.findOne({ username });
  const passwordCorrect =
    teacher === null
      ? false
      : await bcrypt.compare(password, teacher.passwordHash);

  if (!(teacher && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const teacherForToken = {
    username: teacher.username,
    id: teacher._id,
  };

  const token = jwt.sign(teacherForToken, config.SECRET, {
    expiresIn: "1h",
  });

  res.status(200).send({ token, username: teacher.username });
};

export default {
  login,
};
