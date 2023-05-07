const express = require('express')
const router = express.Router()

let works = [
    {
        "Name":"Profession1"
    },
    {
        "Name":"Profession2"
    },
    {
        "Name":"Profession3"
    }
]

router.get('/:id',(req,res)=>{
    //  res.send("User Entered value is "+req.params.id
    //  res.send(works[req.params.id-1])
})
// router.get('/indexx',(req,res)=>{

// })
router.post('/',(req,res)=>{
    works.push({Name:req.body.service_name})
    console.log(works)
    res.redirect(`services/${works.length-1}`)
})
router.param('id',(req,res,next,id)=>
{
    const result = works[req.params.id]
    res.send(`The value consist ${result.Name}`)
})
module.exports = router
