const Router = require('express').Router();
const path = require('path')

Router.get('/',(req,res) => {
    console.log('Homepage')
    // console.log(__dirname)
    res.sendFile(path.join(__dirname,'../test.html'))
})

Router.get('/about',(req,res) => {
    // console.log('Homepage')
    res.send('<form method="POST" action="/admin/21"><input type="submit" value=""></form>')
})

module.exports = Router