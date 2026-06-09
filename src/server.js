import "./config/env.js";
import app from "./app.js";
import db_connect from "./config/db_connect.js";

const PORT = process.env.PORT || 4600;

db_connect()
  .then(() => {
    console.log("DB connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed ❌");
    console.log(err.message);
  });

  app.get("/", (req, res) => {
  res.send("Server is running");
});