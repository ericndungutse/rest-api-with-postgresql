const express = require("express");
const { use } = require("./routes/user.routes");
const userRouter = require("./routes/user.routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
