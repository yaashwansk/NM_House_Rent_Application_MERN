const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectionofDb = require("./config/connect.js");
const path = require("path");

const app = express();

//////dotenv config/////////////////////
dotenv.config();

//////connection to DB/////////////////
connectionofDb();

///////////////port number///////////////////
const PORT = process.env.PORT || 8000;

/////////////////middlewares////////////////
app.use(express.json());
app.use(cors());

/////////////////routes/////////////////////
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/user', require('./routes/userRoutes.js'))
app.use('/api/admin', require('./routes/adminRoutes.js'))
app.use('/api/owner', require('./routes/ownerRoutes.js'))



app.listen(PORT, () => {
  console.log('✅ Backend Server is running.....');
  console.log(`Server is running on port ${PORT}`);
});