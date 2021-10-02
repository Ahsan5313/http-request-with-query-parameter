const express = require("express")

const app = express()

const port = 3000


app.get("/", (req, res) =>{
   
    const {name, id} = req.query;


    res.send(`<h1> Student name is : ${name} and Student id is :${id}  </h1>`)
})


app.listen(port, () =>{


    console.log(`Server is running successfully at http://localhost:${port}`)
})