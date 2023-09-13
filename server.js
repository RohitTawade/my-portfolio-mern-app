const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

// static files access
app.use(express.static(path.join(__dirname,'./client/build')))

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute.js"));

app.use('*', (req,res) => {
   res.send(path.join(__dirname,'./client/build/index.html'))
})

//port
const PORT = process.env.PORT || 8081;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
