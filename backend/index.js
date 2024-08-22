const express= require("express")
const app  = express();


app.get('/aditya',(req, res) =>{
    const data = {
        message:"hi my first request"
    }
  res.json(data)
})


app.listen(4000);