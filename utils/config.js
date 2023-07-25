import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB;

export default {
  PORT,
  MONGODB,
};
