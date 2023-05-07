const express = require('express')
const app = express()
const service = require('./service.js')
const secondPage = require('./secondPage.js')
// app.use(express.static('Public'))
app.set("view engine","ejs")
app.use(express.urlencoded({ extended:true }))
app.get('/',(req,res)=>{
    // res.send("Home Page")
    res.render("indexx",{text:"Palani"})  
})
app.use('/secondPage',secondPage)
app.use('/service',service)
app.listen(3000)