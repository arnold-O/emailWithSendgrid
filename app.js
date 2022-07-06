const express = require("express")
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();


app.use(express.json());


// routes
const emailRoutes = require("./route/emailroute");




app.get("/", emailRoutes);

const PORT = 5000

const start = async () => {

  try {
    app.listen(PORT, console.log(`server is listening on port ${PORT}...`))
    
  } catch (error) {

    console.log(error)
    
  }
}


start();

module.exports = app;
