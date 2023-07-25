import app from "./app.js";
import config from "./utils/config.js";

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(config.PORT, () =>
  console.log(`We are live at port ${config.PORT}`)
);
