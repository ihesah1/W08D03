

const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db");
const app = express();
app.use(express.json());
app.use(cors());


//port varible to hold value from file (env)
//const PORT = process.env.PORT 

const roleRouter = require('./routers/routes/role');
const userRouter = require("./routers/routes/user");


app.use(roleRouter)
app.use(userRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });

