const express = require('express')
const port = process.env.PORT||2037
const mongoose = require('mongoose')
const app = express()
const myRoute = require('./Router/route')

const url = "mongodb+srv://mykhel234:mykhel234@cluster0.9utvg.mongodb.net/schoolAPI?"

mongoose.connect(url).then(()=>{
    console.log('connected successfully')
}).catch((error)=>{
    console.log(error.message)
})
app.use(express.json())

app.use("/api", myRoute)
app.listen(port, ()=>{
    console.log('listening to port 2037')
})