const express = require('express')
const app = express()
const dotenv = require('dotenv')
const routers = require('./routers')
const cors = require('cors')
dotenv.config()


const { PORT, HOST } = process.env

app.use(express.json());
app.use(cors());
app.use('/api/', routers)

try{
  app.listen(PORT, (err) => {
    if (err) {
      console.log("Something went wrong", err);
    }
    console.log(`APP LISTENING ON http://${HOST}:${PORT}`);
  });

}catch(err){
  console.log(err)
}


module.exports = app