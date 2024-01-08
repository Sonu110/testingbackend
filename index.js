require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const Mongoose= require("mongoose")
const logindatas = require('./models/logindata')
const Routes = require('./routes/routes')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
Mongoose.connect(process.env.MongodbUrl).then(()=>{
    console.log("the mogodb sucees ");
}).catch((e)=>{
    
    console.log("the mogodb error is",e);
    
})

app.use(Routes)














app.listen(process.env.PORT,()=>{
console.log("the server start at",process.env.PORT);
})