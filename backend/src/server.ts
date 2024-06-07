require("dotenv").config();
import express from "express";

import { router } from "./routes/router";

const app = express();

const port = process.env.APP_PORT;


app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
