const bodyparser = require('body-parser')
const express = require('express')
const crudeSchema = require('./crudeModelSchema')
const userRoute = require('./router/userRouter')
const app = express()
const port = 7000
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
require('./model/config')
    app.use("/",userRoute)
app.listen(7000,()=>{
    console.log(`server is running on port no:${port}`);
})
